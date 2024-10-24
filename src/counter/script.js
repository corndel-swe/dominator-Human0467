// increment and decrement the count when the buttons are clicked

const num = document.querySelector('#count');

const decButton = document.querySelector('#decrement')
const incButton = document.querySelector('#increment')

decButton.addEventListener('click', () => {
    num.innerText--;
});

incButton.addEventListener('click', () => {
    num.innerText++;
});