const resultEl = document.getElementById("display");
const expressionDisplayEl = document.getElementById("expression");
const sarcasticDisplayEl = document.getElementById("sarcasm");
// const clearAllData = document.getElementById("allClear");

let result = "0";
let expressionDisplay = "";
let sarcasmDisplay = "";
// let clearAllAddedData = " ";

// Append operator to the display //
const setOperator = (nextOperator) => {
  expressionDisplay += nextOperator;

  updateDisplay();
};

// Append number to the display //

const appendNumber = (number) => {
  // result = result === "0" ? number : result + number;
  expressionDisplay = expressionDisplay + number;
  updateDisplay();
};

const updateDisplay = () => {
  resultEl.textContent = result;
  expressionDisplayEl.textContent = expressionDisplay;
  sarcasticDisplayEl.textContent = sarcasmDisplay;
};
updateDisplay();

// All clear function

// const clearData = () => {
//   updateDisplay();
// };
