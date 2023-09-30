let varOne = 0; 
let varTwo = 0;
let operator = "";

function addition(varOne, varTwo) {

    return varOne + varTwo; 

}

function subtraction(varOne, varTwo) {

    return varOne - varTwo; 

}

function multiply(varOne, varTwo) {

    return varOne * varTwo; 

}

function divide(varOne, varTwo) {

    return varOne / varTwo; 

}

function operate(operator, varOne, varTwo) {
    if (operator == "+") {
        return addition(varOne, varTwo)
    } else if (operator == "-") {
        return subtraction(varOne, varTwo)
    } else if (operator == "*") {
        return multiply(varOne, varTwo)
    } else {
        return divide(varOne, varTwo)
    }
}

const calculatorDisplay = document.getElementById("calculatorDisplay");
const buttons = document.querySelectorAll("button");
let clickedValue = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;
        clickedValue = buttonValue;

        calculatorDisplay.textContent += buttonValue;
    });
});