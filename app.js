var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var btnReset = document.querySelector("#btn-reset");
var outputDiv = document.querySelector("#output-div");

var flipContainer = document.querySelector(".flip-container");

var serverURL = "https://api.funtranslations.com/translate/gungan.json?text=";

function translatetext() {
  flipContainer.classList.add("flip-action");
  btnTranslate.classList.add("hide");
  btnReset.classList.remove("hide");
  fetch(serverURL + inputText.value)
    .then((res) => res.json())
    .then((json) => {
      if (inputText.value === "") {
        outputDiv.innerHTML = "Please enter some text!";
        outputDiv.classList.add("font-red");
      } else {
        outputDiv.innerHTML = json.contents.translated;
      }
    })
    .catch((err) => {
      outputDiv.innerHTML = `Some Error Occured. Please come back later.`;
      outputDiv.classList.add("font-red");
    });
}

function resetFn() {
  flipContainer.classList.remove("flip-action");
  btnTranslate.classList.remove("hide");
  btnReset.classList.add("hide");
  outputDiv.classList.remove("font-red");
  inputText.value = "";
}

btnTranslate.addEventListener("click", translatetext);
btnReset.addEventListener("click", resetFn);