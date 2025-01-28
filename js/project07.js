// JavaScript for Virtual Calculator

const display = document.getElementById("display"); // Display element
const buttons = document.querySelectorAll(".btn");  // Button elements

let currentInput = "";  // Current input
let previousInput = ""; // Previous input
let operator = null;    // Operator
let memory = 0;        // Memory

// Update the display
function updateDisplay(value) {
    display.textContent = value || "0"; // Display the value or 0
}

// Clear the calculator
function clearCalculator() {
    currentInput = "";  // Clear current input
    previousInput = ""; // Clear previous input
    operator = null;    // Clear operator
    updateDisplay("0"); // Update the display
}

// Perform calculation
function calculate() {
    const num1 = parseFloat(previousInput); // Convert previous input to number
    const num2 = parseFloat(currentInput);  // Convert current input to number

    if (isNaN(num1) || isNaN(num2)) return; // Check if inputs are valid

    switch (operator) { // Perform calculation based on operator
        case "+":   
            currentInput = (num1 + num2).toString();
            break;
        case "-":
            currentInput = (num1 - num2).toString();
            break;
        case "*":
            currentInput = (num1 * num2).toString();
            break;
        case "/":
            currentInput = num2 === 0 ? "Error" : (num1 / num2).toString();
            break;
        default:
            return;
    }

    operator = null;    // Clear operator
    previousInput = ""; // Clear previous input
    updateDisplay(currentInput);    // Update the display
}

// Handle button click
function handleButtonClick(e) {
    const action = e.target.dataset.action; // Action
    const value = e.target.dataset.value;   // Value

    if (value) {    // If value is present
        if (currentInput === "0" || operator === "=") { // If current input is 0 or operator is =
            currentInput = value;   // Set current input to value
        } else {
            currentInput += value;  // Append value to current input
        }
        updateDisplay(currentInput);    // Update the display
        return;
    }

    switch (action) {   // Perform action based on action
        case "clear":
            clearCalculator();  // Clear the calculator     
            break;
        case "memory-save":
            memory = parseFloat(currentInput) || 0; // Save current input to memory
            break;
        case "memory-recall":
            currentInput = memory.toString();   // Recall memory to current input
            updateDisplay(currentInput);    // Update the display
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            if (currentInput && previousInput && operator) {    // If inputs and operator are present
                calculate();
            }
            operator = action === "add" ? "+" : action === "subtract" ? "-" : action === "multiply" ? "*" : "/";    // Set operator
            previousInput = currentInput;   // Set previous input
            currentInput = "";  // Clear current input
            break;
        case "equals":
            calculate();    
            operator = "=";
            break;
        case "sqrt":
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();  // Calculate square root
            updateDisplay(currentInput);    // Update the display
            break;
        case "percent":
            currentInput = (parseFloat(currentInput) / 100).toString(); // Calculate percentage
            updateDisplay(currentInput);    // Update the display
            break;
        case "decimal":
            if (!currentInput.includes(".")) {  // If current input does not contain .
                currentInput += ".";    // Append .
            }
            updateDisplay(currentInput);    // Update the display
            break;  
        default:
            break;
    }
}

// Add event listeners to buttons
buttons.forEach(button => button.addEventListener("click", handleButtonClick)); 
