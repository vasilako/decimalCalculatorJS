import {
  addNumber,
  addOperator,
  calculateResult,
  calculatePercentage,
  CleanDisplay,
} from "./index.js";

export function handleKeyPress(event) {
  const key = event.key;

  // Regular expressions to classify the input
  const numberRegex = /^[0-9]$/; // Just a number from 0 to 9
  const operatorRegex = /^[+\-*/]$/; // Standard Mathematical Operators

  if (numberRegex.test(key)) {
    addNumber(key); // If it is a number, it adds it to the display
  } else if (operatorRegex.test(key)) {
    addOperator(key); // If it is an operator, it adds it to the display
  } else if (key === "%" || (event.shiftKey && key === "5")) {
    calculatePercentage(); // Special function for percentage
  } else if (key === "Enter") {
    calculateResult(); // Run the calculation
  } else if (key === "Escape") {
    CleanDisplay(); // Clean the screen
  } else {
    if (
      key !== "Shift" &&
      key !== "Control" &&
      key !== "Alt" &&
      key !== "Meta"
    ) {
      alert("TInvalid key on calculator"); // Alert if it is an invalid key
    }
  }
}

// Listen for keyboard events on the entire page
document.addEventListener("keydown", handleKeyPress);

// TODO:
// else if (key === "Backspace") {
//     deleteLast(); // Borra el último carácter
//     }
