const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("buttons");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;

function addNumberValue(number){
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = 
       displayValue === "0" ? number : displayValue + number;
}

inputBtns.forEach((inputBtns)=>{
    if(inputBtns.classList.length == 0) {
       inputBtns,addEventListener("click",()=> addNumberValue(inputBtns.value));
    }
});