// get a reference to the .box element and log it to the console
const box = document.querySelector('.box');
console.dir(box);
const left = document.querySelector('.left');

// add an event listener to the .box element that toggles the .left class
box.addEventListener('click', () => {
    box.classList.toggle('left');
})

// get a reference to #button, #txt and #output
const button = document.querySelector('#button');
const text = document.querySelector('#txt');
const output = document.querySelector('#output');

// add an event listener to the #button that changes the text in #output to the lowercase value of #txt
button.addEventListener('click', event => {
    event.preventDefault();
    output.innerText = text.value.toLowerCase();

})