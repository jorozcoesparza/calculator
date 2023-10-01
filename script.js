const calculatorDisplay = document.getElementById("calculatorDisplay");
const buttons = document.querySelectorAll("button");
let varOne = "";
let varTwo = "";
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
    if (varTwo === 0) {
        return "Cannot divide by zero";
    }
    return varOne / varTwo;
}

function updateDisplay(value) {
    calculatorDisplay.textContent = value;
}

function operate(operator, varOne, varTwo) {
    if (operator === "+") {
        return addition(varOne, varTwo);
    } else if (operator === "-") {
        return subtraction(varOne, varTwo);
    } else if (operator === "*") {
        return multiply(varOne, varTwo);
    } else if (operator === "/") {
        return divide(varOne, varTwo);
    }
}

const equalsButton = document.querySelector('button[value="="]');
equalsButton.addEventListener('click', () => {
    if (varOne !== "" && varTwo !== "" && operator !== "") {
        varOne = parseFloat(varOne);
        varTwo = parseFloat(varTwo);
        const result = operate(operator, varOne, varTwo);
        updateDisplay(result);
        varOne = result.toString();
        varTwo = "";
        operator = "";
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;

        if (buttonValue !== "=") {
            if (!isNaN(buttonValue)) {
                if (operator === "") {
                    varOne += buttonValue;
                } else {
                    varTwo += buttonValue;
                }
            } else if (buttonValue === "clear") {
                varOne = "";
                varTwo = "";
                operator = "";
                calculatorDisplay.textContent = "";
                return;
            } else if (buttonValue === "=") {
                if (varOne !== "" && varTwo !== "" && operator !== "") {
                    varOne = parseFloat(varOne);
                    varTwo = parseFloat(varTwo);
                    const result = operate(operator, varOne, varTwo);
                    updateDisplay(result);
                    varOne = result.toString();
                    varTwo = "";
                    operator = "";
                }
            } else {
                if (varOne !== "" && varTwo !== "" && operator !== "") {
                    varOne = operate(operator, parseFloat(varOne), parseFloat(varTwo)).toString();
                    varTwo = "";
                }
                operator = buttonValue;
            }

            calculatorDisplay.textContent += buttonValue;
        }
    });
});
