import { inputBtns, clearBtn } from "./selectors";
import addDecimal from "./addDecimal.js";
import addNumberValue from "./addNumberValue";
import useOperator from "./useOperator.js";
import { resetAll } from "./values.js";

// Add Event Listeners for numbers, operators, decimal
// Add event listeners one at a time
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => addNumberValue(inputBtn.value));

  } else if (
    inputBtn.classList.contains("operator") ||
    inputBtn.classList.contains("equal-sign-operator")
  ) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));

  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

// Event Listener
clearBtn.addEventListener("click", resetAll);