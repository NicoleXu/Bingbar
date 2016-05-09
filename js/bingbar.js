//常变量的定义
var WHOSE_STATUS_SENTE = "sente";//先手
var WHOSE_STATUS_GOTE = "gote";//后手

var GAME_STATUS_READY = "ready";//准备
var GAME_STATUS_PLAY = "play";//落子
var GAME_STATUS_TAKE = "take";//提子
var GAME_STATUS_MOVE = "move";//挪子


var robot = "";
var player = "";
var whoStatus = WHOSE_STATUS_SENTE;//执子操作者

//bingbar常规逻辑判断
var BingBar = {
	status : GAME_STATUS_READY,

	start:function(){
		if(this.status == GAME_STATUS_READY){
			var checkFlag = false;
			var bingbar = document.getElementsByName("player");
			var length = bingbar.length;
			for(var i =0;i < length;i++){
				if(bingbar[i].checked){
					checkFlag = true;
					var radioValue = bingbar[i].value;
					player = radioValue;
					robot = this.setOtherOne(radioValue);
				}
			}
			if(checkFlag){
				checkFlag = false;
				this.status = GAME_STATUS_PLAY;
				playerLogical.init();
				RobotLogical.step();
			}else{
				alert("请先选择先后手");
			}
		}
	},

	setOtherOne :function(selected){
		if(selected==WHOSE_STATUS_SENTE){
			selected = WHOSE_STATUS_GOTE;
		}else{
			selected = WHOSE_STATUS_SENTE;
		}
		return selected;
	},

	judgeGameStage : function(){
		//判断当前棋盘状态,先这么写着吧
		var chessNum = 0;
		var chess = document.getElementById("chess").getElementsByTagName("li");
		for(var i=0;i<chess.length;i++){
			if(hasClass(chess[i], "bar")){
				chessNum++;
			}
		}
		if(chessNum==25){
			alert("first stage over");
			return;
		}
		this.changeWhoStatus();
	},

	changeWhoStatus : function(){
		//切换执子操作者
		if(whoStatus==WHOSE_STATUS_SENTE){
			whoStatus = WHOSE_STATUS_GOTE;
		}else{
			whoStatus = WHOSE_STATUS_SENTE;
		}
	}
}

//机器逻辑部分
var RobotLogical = {
	step : function(){
		if(robot == whoStatus){
			var chess = document.getElementById("chess").getElementsByTagName("li");
			for(var i=0;i<chess.length;i++){
				if(!hasClass(chess[i], "bar")){
					addClass(chess[i], "bar");
					if(robot == WHOSE_STATUS_SENTE){
						addClass(chess[i], "nanbar");
					}else{
						addClass(chess[i], "suobar");
					}
					break;
				}
			}
			BingBar.judgeGameStage();
		}
	}
}

//玩家逻辑部分
var playerLogical = {
	init : function(){
		var chess = document.getElementById("chess").getElementsByTagName("li");
		for(var i=0;i<chess.length;i++){
			chess[i].index = i;
			chess[i].onclick=function(){
				if(player==whoStatus &&
				   BingBar.status==GAME_STATUS_PLAY &&
				   !hasClass(chess[this.index], "bar")){
					addClass(chess[this.index], "bar");
					if(player == WHOSE_STATUS_SENTE){
						addClass(chess[this.index], "nanbar");
					}else{
						addClass(chess[this.index], "suobar");
					}
					BingBar.judgeGameStage();
					RobotLogical.step();
				}
			}
		}
	},

	/*step : function(){
		if(player == whoStatus){
			switch (BingBar.status){
				case GAME_STATUS_PLAY :
					this.play();
					BingBar.judgeGameStage();
					RobotLogical.step();
					break;
				case GAME_STATUS_TAKE :
					console.log("take one stone");
					break;
				case GAME_STATUS_MOVE:
					alert("move");
					break;
				default:
					alert("nothing");
			}
		}
	},

	play : function(){

	}*/
}

function start(){
	BingBar.start();
}





