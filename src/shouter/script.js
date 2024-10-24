// TODO: get a reference to the #button and #txt and #output
// TODO: add an event listener to the #button that changes the text in #output to the uppercase value of #txt

const button = document.querySelector('#btn');
//const text = document.querySelector('#txt'); // <-- do we not need this?
const output = document.querySelector('#output');

button.addEventListener('click', event => {
    event.preventDefault()
    output.innerText = txt.value.toUpperCase()
})
