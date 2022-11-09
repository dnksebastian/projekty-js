// DOM Elements
const addOptionBtn = document.querySelector(".add");
const cleanOptionsBtn = document.querySelector(".clean");
const showAdviceBtn = document.querySelector(".showAdvice");
const showOptionsBtn = document.querySelector(".showOptions");

const inputElement = document.querySelector("input");
const h1Element = document.querySelector("h1");

// Functions and variables

let optionsArr = ["walcz", "przemyśl to jeszcze raz"];

// Adding options to array
const addOption = (e) => {
  e.preventDefault();

  const userInput = inputElement.value;

  if (userInput) {
    for (option of optionsArr) {
      if (option === userInput) {
        alert('opcja już jest');
        return;
      }
    }
    optionsArr.push(userInput);
    inputElement.value = "";
  }

  console.log(optionsArr);
};

// Cleaning array

const cleanOptions = (e) => {
  e.preventDefault();
  optionsArr.length = 0;
  inputElement.value = "";
  h1Element.textContent = "";
};

// Showing advice in H1

const showAdvice = () => {
    let chosenOptionIndex = Math.floor((Math.random() * optionsArr.length));
    h1Element.textContent = optionsArr[chosenOptionIndex];
};

// Showing array contents

const showOptions = () => {
  alert(optionsArr.join(', '));
};

// Event listeners

addOptionBtn.addEventListener("click", addOption);

cleanOptionsBtn.addEventListener("click", cleanOptions);

showAdviceBtn.addEventListener("click", showAdvice);

showOptionsBtn.addEventListener("click", showOptions);
