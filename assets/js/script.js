
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



