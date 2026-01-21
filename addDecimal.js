import { getAwaitingNextValue } from "./values.js";
import { calculatorDisplay } from "./selectors.js";

function addDecimal() {
  // If operator pressed, don't add decimal
  if (getAwaitingNextValue()) return;
  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

export default addDecimal;