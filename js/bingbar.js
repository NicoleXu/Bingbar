// function successively() {
//     var suobar = false;
//     var nanbar = true;
//     if (suobar) {
//         //balabalbala
//         suobar = false;
//         nanbar = true;
//     } else {
//         //balabalbala
//         nanbar = false;
//         suobar = true;
//     }
// }

window.onload = function() {
    function chose() {
        var person_1 = document.getElementById('person_1');
        var person_2 = document.getElementById('person_2');
        // body...
        if (person_1.checked == true) {
            suobar = true;
            nanbar = false;
            alert("aha suo bao frist");
        } else {
            nanbar = true;
            suobar = false;
            alert("aha nan bao frist");
        }
    }
    // body...
    chose();
}
