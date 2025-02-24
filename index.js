import { handleKeyPress } from "./keyPress.js";

let display = document.getElementById("display");
const audio = document.getElementById("clickSound");

function addNumber(numero) {
  if (display.textContent === "0") {
    display.textContent = "";
  }
  display.textContent += numero;
  audio.play();
  console.log(display.textContent);
}

function addOperator(operator) {
  if (display.textContent === "0") {
    alert("Please enter a number first.");
    return;
  }
  display.textContent += operator;
  audio.play();
}

function calculateResult() {
  let displayText = display.textContent;
  if (displayText === "0") {
    alert("Please enter a number first.");
    return;
  }

  try {
    display.textContent = eval(displayText);
    audio.play();
  } catch (error) {
    alert("Error! Clean Display and try again.");
  }
}
function calculatePercentage() {
  let displayText = display.textContent;

  if (!displayText.match(/[\d.]+[\+\-\*\/][\d.]+$/)) {
    alert(
      "Please enter a valid transaction before calculating the percentage."
    );
    return;
  }

  // Extract the last two numbers and the operator
  const match = displayText.match(/([\d.]+)([\+\-\*\/])([\d.]+)$/);

  if (!match) return;

  const firstNum = parseFloat(match[1]); // First number
  const operator = match[2]; // Operator (+, -, *, /)
  const secondNum = parseFloat(match[3]); // Second number

  // Declare variable to save the result
  let percentageValue;

  // Apply the calculation according to the operator
  switch (operator) {
    case "+":
      percentageValue = firstNum + firstNum * (secondNum / 100); // Sum %
      break;
    case "-":
      percentageValue = firstNum - firstNum * (secondNum / 100); // Substract %
      break;
    case "*":
      percentageValue = firstNum * (secondNum / 100); // Multiply %
      break;
    case "/":
      percentageValue = firstNum / (secondNum / 100); // Divide %
      break;
    default:
      alert("Invalid operation");
      return;
  }

  // Replace the calculation on the screen with the obtained value
  display.textContent = displayText.replace(
    /([\d.]+)([\+\-\*\/])([\d.]+)$/,
    percentageValue
  );
  audio.play();
}

function CleanDisplay() {
  display.textContent = "0";
  audio.play();
}

function SoundOnOff() {
  const audio = document.getElementById("clickSound");
  const soundIcon = document.getElementById("soundIcon");

  const iconElement = soundIcon.querySelector("i");

  if (audio.muted) {
    audio.muted = false;
    iconElement.className = "fa-solid fa-volume-high fa-xs";
  } else {
    audio.muted = true;
    iconElement.className = "fa-solid fa-volume-off fa-ms";
  }
}

export {
  addNumber,
  addOperator,
  calculateResult,
  calculatePercentage,
  CleanDisplay,
};

// Functions are exposed to `window` to make them global
window.calculator = {
  addNumber: addNumber,
  addOperator: addOperator,
  calculateResult: calculateResult,
  calculatePercentage: calculatePercentage,
  CleanDisplay: CleanDisplay,
  SoundOnOff: SoundOnOff,
};
