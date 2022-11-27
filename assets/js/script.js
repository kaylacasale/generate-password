
var inputLength;

function getLength() {
    var inputLength = document.querySelector("#inputLength").value;
    var message = document.querySelector("#message");



    //message.innerHTML = "Your password will be " + inputLength.value + " characters long.";

    if (inputLength <= 8 && inputLength >= 128) {

        message.innerHTML = "Please enter a number between 8 and 128"
        return getLength();
    } else {
        message.innerHTML = "Your password will be " + inputLength + " characters long.";
    }
}

function getUpperCaseNumber() {
    var inputUpperCaseNumber = document.querySelector("#inputUpperCaseNumber").value;
    var messageUpperCase = document.querySelector("#messageUpperCase");

    if (inputUpperCaseNumber = 0 || inputUpperCaseNumber >= userInputLength) {
        messageUpperCase.innerHTML = "Please choose a number greater than 0 and less than chosen length.";
    } else {
        messageUpperCase.innerHTML = "Your password will have " + inputUpperCaseNumber.value + " UPPER case letters.";
    }
}



//store <input> in variable inputLength
//#finds the text from id element
//empty until I press button, <h1> tag id messageLength responds when press button


