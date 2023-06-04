function DisplayDigit(value) {
    document.getElementById('result').value += value;
}


//To clear display
function DisplayClear() {
    document.getElementById('result').value = "";
}


//T0 Delete the digit one by one
function DeleteDigit() {
    if (document.getElementById('result').value == "") {
        document.getElementById('result').value = ""
    } else {
        let value = document.getElementById('result').value
        document.getElementById('result').value = value.toString().slice(0, -1)
    }
}

//To calcultate all the input in this calculator
function calculate() {
    if (document.getElementById('result').value == "") {
        document.getElementById('result').value = ""
    } else {
        let digit = document.getElementById('result').value
        let equal = eval(digit)
        document.getElementById('result').value = equal
    }
}