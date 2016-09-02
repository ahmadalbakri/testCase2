function incrementValue(i) {
    var value = parseInt(document.getElementById('number' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 9) {
        value++;
        document.getElementById('number' + i).value = value;
    }
}

function decrementValue(i) {
    var value = parseInt(document.getElementById('number' + i).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('number' + i).value = value;
    }
}
