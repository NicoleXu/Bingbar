window.onload = function() {
    var person_1 = document.getElementById('person_1');
    var person_2 = document.getElementById('person_2');

    function getValue() {
        var person = document.getElementsByName("person");
        var length = person.length;
        for (var i = 0; i < length; i++) {
            if (person[i].checked) {
                var radioValue = person[i].value;
                alert(radioValue);
            }
        }
    }
    person_1.addEventListener("change", getValue);
    person_2.addEventListener("change", getValue);

}
