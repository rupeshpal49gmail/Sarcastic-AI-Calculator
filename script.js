const resultEl = document.getElementById("display");
const expressionDisplayEl = document.getElementById("expression");
const sarcasticEl = document.getElementById("sarcasm");

let result = "0";
let expressionResult = "";
let sarcasticMessage = "";

const displayExpression = () => {
  resultEl.textContent = result;
  expressionDisplayEl.textContent = expressionResult;
  sarcasticEl.textContent = sarcasticMessage;
};
displayExpression();

// Append number to the display //

const appendNumber = (number) => {
  result = result === "0" ? number : result + number;
  expressionResult = result;
  displayExpression();
};

// Append operator to the display //
const setOpertor = () => {};
