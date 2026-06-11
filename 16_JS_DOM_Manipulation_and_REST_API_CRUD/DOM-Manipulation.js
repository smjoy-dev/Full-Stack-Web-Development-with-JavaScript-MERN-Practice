/*DOM: - Document Object Model
HTML document কে object/tree আকারে represent করে।
JavaScript DOM ব্যবহার করে HTML/CSS change করতে পারে।

Vanilla JavaScript:
Framework ছাড়া direct JavaScript দিয়ে DOM control করা। */

// HTML
<h1 id="title">Hello</h1>

// DOM Manipulation using Vanilla JS
let heading = document.getElementById("title");
heading.innerText = "Hello JavaScript";

/* JavaScript = Programming Language
DOM = Browser provided API
Vanilla JS = Pure JS using DOM directly */
____________________________________________

// get element by id
const heading = document.getElementById('title');

// get element by class
const paragraph = document.querySelector('.text1');

console.log(heading.innerText);
console.log(paragraph.innerText);


// all same class calling using forEach loop and querySelectorAll
const allcard = document.querySelectorAll('.card');
allcard.forEach(card => {
    console.log(card.innerText);
});


// change text
const hello = document.getElementById('title2');
hello.innerText = 'Hello JavaScript';


// change html
// document.getElementById('text2').innerHTML = '<b>Welcome Bold text</b>';
const text3 = document.getElementById('text3');
text3.innerHTML = '<b> Welcome Bold text </b>';


// change style/css
const text4 = document.getElementById('text4');
text4.style.color = 'red';
text4.style.fontSize = '20px';
text4.style.backgroundColor = 'yellow';


// create element and append to body
const el = document.createElement('p');
el.innerText = 'This is a new paragraph';
document.getElementById("container").appendChild(el);


// remove element
const removeEl = document.getElementById('remove');
removeEl.remove();


// event listener
const button = document.getElementById('myButton');
const msg = document.getElementById('msg');
button.addEventListener('click', () => {
    msg.innerText = 'Button Clicked!';
});


// input event listener
const input = document.getElementById('name');
const output = document.getElementById('output');
input.addEventListener('input', () => {
    output.innerText = `Hello, ${input.value}!`;
});


// event listener - mouseover
const hover = document.getElementById('hover');
hover.addEventListener('mouseover', () => {
    hover.style.backgroundColor = 'black ';
});

hover.addEventListener('mouseout', () => {
    hover.style.backgroundColor = 'lightblue';
});


// form submit event listener
const form = document.getElementById('myForm');
const formMsg = document.getElementById('formMsg');
// e = event object, e.preventDefault() = form submit default behavior stop, data sathe sathe refresh hoye jay, 
// tai e.preventDefault() use kore form submit er default behavior stop kora hoy
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    formMsg.innerText = `Form submitted! Username: ${username}, Email: ${email}`;
});
