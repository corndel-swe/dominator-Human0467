// increment and decrement the count when the buttons are clicked

const num = document.querySelector('#count')
var current = num.innerText

const decButton = document.querySelector('#decrement')
decButton.addEventListener('click', () => {
    num.innerText = current--
})

const incButton = document.querySelector('#increment')
incButton.addEventListener('click', () => {
    num.innerText = current++
})