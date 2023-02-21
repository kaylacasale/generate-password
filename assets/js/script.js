
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
    }

});



var upperCaseLetters = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
var upperCaseLettersLength = upperCaseLetters.length;
var randomUpperText = document.querySelector("#randomUpper");
var randomUpperBtn = document.querySelector(".upperBtn");
var addUpper = document.querySelector(".addUpper");
var random = []
var randomUppers = []

randomUpperBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Upper");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length; i++) {
            var letter = upperCaseLetters[Math.floor(Math.random() * upperCaseLettersLength)];
            console.log(random);
            var liTagUpper = document.createElement("p")
            liTagUpper.textContent = letter;
            randomUpperText.appendChild(liTagUpper)
            addUpper.textContent = "SEE Upper Cases";
            addUpper.setAttribute("style", "background-color:greenyellow");
            randomUppers.push(letter);
            random.push(letter);
        }
        console.log(random);
    }

});


var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var lowerCaseLettersLength = lowerCaseLetters.length;
var randomLowerText = document.getElementById('randomLower');
var randomLowerBtn = document.querySelector(".lowerBtn");
var addLower = document.querySelector(".addLower");
var randomLowers = []


randomLowerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length; i++) {
            var letter = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLettersLength)];
            console.log(random);
            var liTagLower = document.createElement("p")
            liTagLower.textContent = letter;
            randomLowerText.appendChild(liTagLower)
            addLower.textContent = "SEE Lower Cases";
            addLower.setAttribute("style", "background-color:greenyellow");
            randomLowers.push(letter);
            random.push(letter);
        }
        console.log(random)
    }
});



var specialChars = "!#$%&'()*+,-./:;<^=>?@[_`{|}~";
var specialCharsLength = specialChars.length;
var randomSpecialText = document.getElementById('randomSpecial');
var randomSpecialBtn = document.querySelector(".specialBtn");
var addSpecial = document.querySelector(".addSpecial");
var randomSpecials = []



randomSpecialBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length; i++) {
            var letter = specialChars[Math.floor(Math.random() * specialCharsLength)];
            console.log(random);
            var liTagSpecial = document.createElement("p")
            liTagSpecial.textContent = letter;
            randomSpecialText.appendChild(liTagSpecial)
            addSpecial.textContent = "SEE Specials";
            addSpecial.setAttribute("style", "background-color:greenyellow");
            randomSpecials.push(letter);
            random.push(letter);
        }
        console.log(random)
    }
});



var Numbers = "0123456789";
var NumbersLength = Numbers.length;
var randomNumbersText = document.getElementById('randomNumber');
var randomNumbersBtn = document.querySelector(".numberBtn");
var addNumber = document.querySelector(".addNumber");
var randomNumbers = []


randomNumbersBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Generating Random Lower");
    length = Number(lengthInput.value);
    if (!length) {
        pElError.textContent = "ERROR: Cannot begin generating without length number input";
    } else {
        for (var i = 0; i < length; i++) {
            var letter = Numbers[Math.floor(Math.random() * NumbersLength)];
            console.log(random);
            var liTagNumbers = document.createElement("p")
            liTagNumbers.textContent = letter;
            randomNumbersText.appendChild(liTagNumbers)
            addNumber.textContent = "SEE Numbers";
            addNumber.setAttribute("style", "background-color:greenyellow");
            randomNumbers.push(letter);
            random.push(letter);
        }
        console.log(random);
    }
});



var addBtnUpper = document.querySelector(".addUpper")
var divPassword = document.getElementById('addPassword');
// var uppers = document.querySelector('.uppersAdded')

addBtnUpper.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Adding Random Values");
    var DivTagPassword = document.createElement("p")
    DivTagPassword.textContent = "\n" + randomUppers;
    divPassword.appendChild(DivTagPassword);
    // uppers.textContent = randomUppers;
});



var addBtnLower = document.querySelector(".addLower")


addBtnLower.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Adding Random Values");
    var DivTagPassword = document.createElement("p")
    DivTagPassword.textContent = "\n" + randomLowers;
    divPassword.appendChild(DivTagPassword);
});


var addBtnSpecial = document.querySelector(".addSpecial")


addBtnSpecial.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Adding Random Values");
    var DivTagPassword = document.createElement("p")
    DivTagPassword.textContent = "\n" + randomSpecials;
    divPassword.appendChild(DivTagPassword);
});


var addBtnNumber = document.querySelector(".addNumber")


addBtnNumber.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Adding Random Values");
    var DivTagPassword = document.createElement("p")
    DivTagPassword.textContent = "\n" + randomNumbers;
    divPassword.appendChild(DivTagPassword);
});

// var allChars = [...randomUppers, ...randomLowers, ...randomSpecials, ...randomNumbers];
// console.log(allChars);

// var addAllCharacters = randomUppers.concat[randomLowers, randomSpecials, randomNumbers];
var addedCharactersBtn = document.querySelector(".addedCharacters");

// console.log(addAllCharacters);
var passwordChars = [];

var pElDisplay = document.querySelector(".displayPassword");
var displayPasswordString = document.querySelector(".displayPasswordInner")
const passwordLabelDiv = document.querySelector('.passwordLabel')


// copyBtn.addEventListener('click', function copyPassword(passwordString) {
//     navigator.clipboard.writeText(passwordString.value);
//     alert("Copied the generated password to your clipboard: " + passwordString.value);

// })

addedCharactersBtn.addEventListener('click', function (e) {
    e.preventDefault();
    length = Number(lengthInput.value);
    for (var i = 0; i < length; i++) {
        var chars = random[Math.floor(Math.random() * random.length)];
        passwordChars.push(chars);
        var passwordString = passwordChars.join(" ");
        pElDisplay.setAttribute("class", "passwordString")
        pElDisplay.textContent = passwordString;
        // const passwordLabel = document.createElement("p");
        // passwordLabelDiv.appendChild(passwordLabel)
        passwordLabelDiv.textContent = "Your Generated Password Below:"
        displayPasswordString.textContent = passwordString;

    }
    // copyPassword(pElDisplay)
    console.log(passwordString);
    // document.querySelector('.displayPassword').id = "getPass";


    // copyBtn.addEventListener('click', function copyPassword() {
    //     navigator.clipboard.writeText(pElDisplay.value);
    //     alert("Copied the generated password to your clipboard: " + pElDisplay.value);

    // })

    // function copyPassword() {
    //     console.log(pElDisplay.value)
    //     // const copyLabel = document.createElement("p");
    //     // copyLabel.appendChild(labelDiv)

    //     // pElDisplay.select();
    //     // displayPasswordString.setSelectionRange(0, 99999);
    //     navigator.clipboard.writeText(pElDisplay.value);
    //     alert("Copied the generated password to your clipboard: " + pElDisplay.value);
    // }

});

// const copyBtn = document.querySelector('.copyButton')
// copyBtn.addEventListener('click', function copyPassword(passwordString) {
//     navigator.clipboard.writeText(passwordString);
//     alert("Copied the generated password to your clipboard: " + displayPasswordString.value);

// })
// pElDisplay.addEventListener('onclick', copyPassword())

const labelDiv = document.getElementById('labelDivPEl')
const passGot = document.getElementById('getPass')
const copyBtn = document.querySelector('.copyButton')
const buttonlabel = document.getElementById('copyPass')

function copyPassword() {
    buttonlabel.textContent = "COPY"
    console.log(passGot)

    const pass = passGot.innerHTML
    labelDiv.textContent = "Copy To Clipboard: "
    // const copyLabel = document.createElement("p");
    // copyLabel.appendChild(labelDiv)

    // pElDisplay.select();
    // displayPasswordString.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pass);
    alert("Copied the generated password to your clipboard: " + pass);
}
// var pElDisplay = document.querySelector(".passwordDisplay");

// length = Number(lengthInput.value);
// function chooseRandom() {
//     for (var i = 0; i < length; i++) {
//         var choosePassword = random[Math.floor(Math.random() * random.length)];
//         randomAll.push(choosePassword);
//         pElDisplay.textContent = randomAll;

//     }
//     console.log(randomAll);

// }


// var divTagDisplay = document.querySelector(".passwordDisplay");

// function displayPassword() {
//     var displayTag = document.createElement("p");
//     displayTag.textContent = randomAll;
//     divTagDisplay.appendChlid(displayTag);
//}




// var randomAllTogether = randomAll.join();
// length = Number(lengthInput.value);
// var all = []
// // var upperRanomized = randomUppers.join();
// var choose = length.length / 4
// var chosenU = randomUppers[0, choose];


// function randomizeAll() {
//     console.log(chosenU);




