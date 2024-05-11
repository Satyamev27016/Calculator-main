document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.id;

            if (value >= "0" && value <= "9") {
                currentInput += value;
                updateDisplay();
            } else if (value === ".") {
                if (!currentInput.includes(".")) {
                    currentInput += value;
                    updateDisplay();
                }
            } else if (value === "C") {
                clear();
            } else if (value === "←") {
                backspace();
            } else if (value === "=") {
                calculate();
            } else {
                if (previousInput !== "") {
                    calculate();
                }
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        });
    });

    function updateDisplay() {
        result.value = currentInput;
    }

    function clear() {
        currentInput = "";
        operator = "";
        previousInput = "";
        updateDisplay();
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    function calculate() {
        if (currentInput === "" || previousInput === "") return;

        switch (operator) {
            case "+":
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case "-":
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case "*":
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case "/":
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
        }

        operator = "";
        previousInput = "";
        updateDisplay();
    }
});
