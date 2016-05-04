window.onload = function() {
    //person frist or last start
    var person_1 = document.getElementById('person_1');
    var person_2 = document.getElementById('person_2');

    function getValue() {
        var person = document.getElementsByName("person");
        var length = person.length;
        for (var i = 0; i < length; i++) {
            if (person[i].checked) {
                var radioValue = person[i].value;

            }
        }
    }
    person_1.addEventListener("change", getValue);
    person_2.addEventListener("change", getValue);

    //person frist or last last end


    function playChess() {
        var grid = document.getElementsByClassName("grid");
        for (var i = grid.length - 1; i >= 0; i--) {
            alert(grid[i]);
        }

    }
    playChess();
}
