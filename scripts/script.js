console.log("Calculator");

let display = document.querySelector(".display");
display.textContent = "0";
let buttons = document.querySelectorAll("button");
let hasDecimal = false;

function getInput(button) {
  if (button.value == "all-clear") {
    display.textContent = "0";
    hasDecimal = false;
  }
  if (display.textContent.length == 12) {
    return;
  }
  if (display.textContent == "0") {
    if (button.value == ".") {
      display.textContent = "0.";
      hasDecimal = true;
    }
  }
  if (button.classList == "number") {
    if (display.textContent.includes(".")) {
      hasDecimal = true;
    }
    if (hasDecimal) {
      if (button.value == ".") {
        display.textContent = display.textContent;
      } else {
        display.textContent += button.value;
      }
    } else {
      if (display.textContent[0] == "0") {
        display.textContent = "";
        display.textContent += button.value;
      } else {
        display.textContent += button.value;
      }
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    getInput(button);
  });
});
