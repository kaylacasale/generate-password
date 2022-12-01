
// what elements to I need to grab to allow interaction...

var pElError = document.querySelector('.errorMessage');
//var checkBoxInput = document.getElementByType('checkbox');

//console.log(upperCheckBox.checked);

var lengthInput = document.querySelector('.lengthInput');
//var length = Number(lengthInput.value);
//length = Number(lengthInput.value);
var lengthBtn = document.querySelector('.length');
var passwordDiv = document.querySelector('.password');



lengthBtn.addEventListener('click', function () {
    length = Number(lengthInput.value);
    console.log(length);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
        randomBtns.disabled = true;
    } else if (
        (length < 8) || (length > 128)) {
        pElError.textContent = "";
        pElError.textContent = "ERROR: Your number needs to be above 7  and below 128 characters in length";
        randomBtns.disabled = true;
    } else {
        passwordDiv.textContent = length + " characters";
        randomBtns.disabled = false;
    }

});


// var randomBtns = document.getElementsByClassName('random');


// for (var i = 0; i < randomBtns.length; i++) {
//     randomBtns[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         length = Number(lengthInput.value);
//         if (!length) {
//             //pElError.textContent = "";
//             pElError.textContent = "ERROR: Cannot begin generating without length number input";

//         }
//     })
// };


var upperCaseLetters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
var upperCaseLettersLength = upperCaseLetters.length;
var randomUpperText = document.querySelector("#randomUpper");
var randomUpperBtn = document.querySelector(".upperBtn");

randomUpperBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Upper");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length + 1; i++) {
            random = upperCaseLetters[Math.floor(Math.random() * upperCaseLettersLength)];
            console.log(random);
            var liTagUpper = document.createElement("p")
            liTagUpper.textContent = random;
            randomUpperText.appendChild(liTagUpper)
        }
    }
});

var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var lowerCaseLettersLength = lowerCaseLetters.length;
var randomLowerText = document.getElementById('randomLower');
var randomLowerBtn = document.querySelector(".lowerBtn");

randomLowerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length + 1; i++) {
            random = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLettersLength)];
            console.log(random);
            var liTagLower = document.createElement("p")
            liTagLower.textContent = random;
            randomLowerText.appendChild(liTagLower)
        }
    }
});


var specialChars = "!#$%&'()*+,-./:;<^=>?@[_`{|}~";
var specialCharsLength = specialChars.length;
var randomSpecialText = document.getElementById('randomSpecial');
var randomSpecialBtn = document.querySelector(".specialBtn");

randomSpecialBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length + 1; i++) {
            random = specialChars[Math.floor(Math.random() * specialCharsLength)];
            console.log(random);
            var liTagSpecial = document.createElement("p")
            liTagSpecial.textContent = random;
            randomSpecialText.appendChild(liTagSpecial)
        }
    }
});

var Numbers = "0123456789";
var NumbersLength = Numbers.length;
var randomNumbersText = document.getElementById('randomNumber');
var randomNumbersBtn = document.querySelector(".numberBtn");

randomNumbersBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length + 1; i++) {
            random = Numbers[Math.floor(Math.random() * NumbersLength)];
            console.log(random);
            var liTagNumbers = document.createElement("p")
            liTagNumbers.textContent = random;
            randomNumbersText.appendChild(liTagNumbers)
        }
    }
});

// function upperCheck() {
//     var upperCheckBox = document.getElementById("#upperCheckBox");

//     if (upperCheckBox.checked == true) {
//         console.log("true");
//     }
// }
// var randomUpperBtn = document.querySelector("#upperBtn");


// var pElRandomUpperTxt = document.querySelector("#randomUpper");

// upperCheckBox.addEventListener("click", function () {
//     if (upperCheckBox.value === true) {
//         console.log("checked");
//         pElRandomUpperTxt.textContent = "PRESS: Generate Random";

//     }
// })
// if (upperCheckBox.value === true) {
//     console.log("checked");


// }


// randomBtns[i].addEventListener('click', function () {
//     length = Number(lengthInput.value);
//     for (var i = 0; i < randomBtns.length; i++) {
//         if (!length) {
//             pElError = "ERROR: cannot begin generating without length number input";
//         }
//     }
// });


// randomBtns.addEventListener('click', function () {
//     length = Number(lengthInput.value);
//     for (var i = 0; i < randomBtns.length; i++) {

//     }
//     }

// });


// if (!checkBoxInput) {
//     pElError.textContent = "You need to check atlast one  type to start generating!"
// }
/*
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

