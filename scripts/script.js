console.log('Calculator')

let display = document.querySelector('.display');
display.textContent = '';
let buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value == 'all-clear') {
            display.textContent = ''
        }
    })
})