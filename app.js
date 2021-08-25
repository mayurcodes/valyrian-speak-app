var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");
var errorOutput = document.querySelector("#error-output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    divOutput.innerText = "";
    errorOutput.innerText = "There are too many requests sent to the server in a given amount of time. Please try again later.";
}

function clickEventHandler() {
    var inputText = txtInput.value;
    if (inputText != "") {
        fetch(getTranslationUrl(inputText))
            .then(response => response.json())
            .then(json => divOutput.innerText = json.contents.translated)
            .catch(errorHandler)

            errorOutput.innerText = "";
    } else {
        divOutput.innerText = "";
        errorOutput.innerText = "Please type something...";
    }

}

btnTranslate.addEventListener("click", clickEventHandler);