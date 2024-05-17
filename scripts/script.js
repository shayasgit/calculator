let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
display.textContent = "0";

function clearDisplay(button) {
  if (button.classList == "all-clear") {
    display.textContent = "0";
  }
}

function getInput(button) {
  if (display.textContent.length >= 12) {
    return;
  }
  if (button.classList.contains("number")) {
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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearDisplay(button);
    getInput(button);
  });
});

