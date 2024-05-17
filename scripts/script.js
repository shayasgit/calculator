let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
display.textContent = "0";
let firstOperand = null;
let firstOperator = null;
let secondOperand = null;
let secondOperator = null;
let result = null;
let hasOperand = false

function clearDisplay(button) {
  if (button.classList == "all-clear") {
    display.textContent = "0";
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    hasOperand = false
    console.clear();
  }
}

function getInput(button) {
  if (display.textContent.length >= 12) {
    return;
  }
  if (button.classList.contains("number")) {
    if (hasOperand == true) {
      display.textContent = "";
      hasOperand = false;
    }
    if (display.textContent == "0") {
      if (button.value == ".") {
        display.textContent = "0.";
      } else {
        display.textContent = button.value;
      }
    } else {
      if (display.textContent.includes(".")) {
        if (button.value == ".") {
          return;
        }
      }
      display.textContent += button.value;
    }
  }
}

function pressOperator(button) {
  if (button.classList.contains("operator")) {
    hasOperand = true
    if (firstOperand == null) {
      firstOperand = Number(display.textContent);
    } else {
      secondOperand = Number(display.textContent);
    }
    if (result != null) {
      firstOperand = result;
      firstOperator = secondOperator;
    }
    if (firstOperator == null) {
      if (button.value == "+") {
        firstOperator = "+";
      } else if (button.value == "-") {
        firstOperator = "-";
      } else if (button.value == "/") {
        firstOperator = "/";
      } else if (button.value == "*") {
        firstOperator = "*";
      } else if (button.value == '=') {
        firstOperand = '=';
      }
    } else {
      if (button.value == "+") {
        secondOperator = "+";
      } else if (button.value == "-") {
        secondOperator = "-";
      } else if (button.value == "/") {
        secondOperator = "/";
      } else if (button.value == "*") {
        secondOperator = "*";
      } else if (button.value == '=') {
        secondOperator = '='
      }
      result = operate(firstOperand, secondOperand, firstOperator);
      // result = Math.round(result + 'e' + 15) + 'e-' + 15;
      display.textContent = result;
    }
      // Debugging console 
    // console.log("First Operand " + firstOperand);
    // console.log("First Operator " + firstOperator);
    // console.log("Second Operand " + secondOperand);
    // console.log('Second Operator ' + secondOperator)
    // console.log("Result = " + result);
  }
}

function operate(x, y, op) {
  if (op == '+') {
    return x + y;
  } else if (op == '-') {
    return x - y;
  } else if (op == '*') {
    return x * y;
  } else if (op == '/') {
    if (y == 0) {
      return 'ERROR';
    } else {
      return x / y;
    }
  } else if (op == '=') {
    return x;
  }
}

function percentage (button) {
  if (button.classList.contains('percentage')) {
    display.textContent = Number(display.textContent) / 100;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearDisplay(button);
    getInput(button);
    pressOperator(button);
    percentage(button);
  });
});
