var errorEl = document.querySelector('.errorMessage');
var numberInputEl = document.querySelector('.length');
var changePEl = document.querySelector('.inputFor');
var changePasswordEl = document.querySelector('.password');
var numberLength;
var passwordLength;
var lengthDone = document.createElement("div");
var body = document.body;
//var lengthOutput = lengthFunction(numberLength);


document.querySelector('.enterLength').addEventListener('click', function () {
    numberLength = Number(numberInputEl.value);
    console.log(numberLength);


    if (!numberLength) {
        errorEl.innerHTML = "";
        console.log("You made it!");
        errorEl.innerHTML = "ERROR: Not a number, please enter a value within the given range above.";

    } else if (
        (numberLength < 8) || (numberLength > 128)) {
        errorEl.innerHTML = ""
        errorEl.innerHTML = 'ERROR: Your number needs to be within the range 8 - 128';
    } else {
        //errorEl.innerHTML = "";
        //create div and p tag and update p tag to be password generated length
        changePasswordEl.textContent = numberLength + " characters long";
        changePEl.textContent = "PRESS button: Upper Case Letters.";
        changePEl.setAttribute("style", "color: red")
        body.appendChild(lengthDone);
        lengthDone.textContent = "Length = " + numberLength + " characters";
        lengthDone.setAttribute("style", "float:right; text-align:center; font-size:40px; margin:10px; background-color:#adff2f");
        lengthToUpper.textContent = "Upper Case Letters";



        //document.querySelector('.password').innerHTML = numberLength + ' characters long';
    }
});
var lengthToUpper = document.querySelector('.again');
var selectUpper = document.getElementById('upperCaseSection');
//var selectUpperButton = document.querySelector('.upperCaseSection.enterLength');
var upperCaseLetters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
var upperCaseLettersLength = upperCaseLetters.length;
var generateUpperEl = document.getElementById('generateUpper');
//var randomUpperLetters = upperCaseLetters[random];




lengthToUpper.addEventListener('click', function () {
    selectUpper.setAttribute("style", "display: block")
});


document.querySelector('.randomUpperCase').addEventListener('click', function () {
    console.log(numberLength);
    for (var i = 0; i < numberLength + 1; i++) {
        random = upperCaseLetters[Math.floor(Math.random() * upperCaseLettersLength)];
        console.log(random);
        generateUpperEl.innerHTML = random;
        //var randomUpperLetters = upperCaseLetters[random];
        //console.log(randomUpperLetters);
        //var concatUpper = ''.concat(randomUpperLetters);
        //generateUpperEl.textContent = 'concatUpper';
        //var concatUpper = ''.concat(random);
        //console.log(concatUpper);
        //generateUpperEl.textContent = concatUpper;
        //joinUpper = Array.prototype.join(random);


        //stringifyUpper = JSON.stringify(random);
        //console.log(stringifyUpper);

        //generateUpperEl.textContent = joinUpper






    }



})

//getLength(numberLength);

//console.log(document.querySelector(numberLength));
//var charactersLong =
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

