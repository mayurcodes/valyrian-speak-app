var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationUrl(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured", error);
}

function clickEventHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => divOutput.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);