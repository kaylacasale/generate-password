

var errorEl = document.querySelector('.errorMessage')
var numberInputEl = document.querySelector('.length');
var numberLength;


document.querySelector('.enterLength').addEventListener('click', function () {
    numberLength = Number(numberInputEl.value);
    console.log(numberLength);

    if (!numberLength) {
        errorEl.innerHTML = "";
        console.log("You made it!");
        errorEl.innerHTML = "Not a number";

    } else if (
        (numberLength < 8) || (numberLength > 128)) {
        errorEl.innerHTML = ""
        errorEl.innerHTML = 'ERROR: Your number needs to be within the range 8 - 128';
    } else {
        errorEl.innerHTML = "";
        //create div and p tag and update p tag to be password generated length
        var passDivEl = document.createElement("div");
        var passOlLength = document.createElement("ol");
        var passLiLength = document.createElement("li");
        passDivEl.textContent = "Password Length";
        passDivEl.appendChild(passOlLength);
        passOlLength.appendChild(passLiLength);
        passLiLength.textContent = numberLength + " characters long";

        //document.querySelector('.password').innerHTML = numberLength + ' characters long';
    }
});
//errorEl. //to access global variable after input in function

//console.log(numberLengthValue.numberLength.value);
//this.numberLength.value = var fullLength;
//numberLengthValue(numberLength);

//numberLengthValue.numberLength();
//lengthEmpty.unshift(numberLengthValue.numberLength.value);
//console.log(lengthFull);

//numberLengthValue(numberLength) = var passwordLength;


/*
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
*/

