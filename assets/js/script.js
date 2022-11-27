
var inputLength;

function getLength() {
    var inputLength = document.querySelector("#inputLength").value;
    var message = document.querySelector("#message");



    //message.innerHTML = "Your password will be " + inputLength.value + " characters long.";

    if (inputLength >= 8 && inputLength <= 128) {
        message.innerHTML = "Your password will be " + inputLength + " characters long.";
    } else {
        message.innerHTML = "Please enter a number between 8 and 128"
        return getLength();
    }
}





//store <input> in variable inputLength
//#finds the text from id element
//empty until I press button, <h1> tag id messageLength responds when press button


