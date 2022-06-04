// DATA

const availCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  0,
  1,
  2,
  3,
  4,
  5,
  "!",
  "@",
  "#",
];

// DOM Variables

const mainBtn = document.getElementById("main-btn");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const password3 = document.getElementById("password-3");
const password4 = document.getElementById("password-4");

// Functions

function displayPasswords() {
  for (let i = 0; i < availCharacters.length; i++) {
    let randomNumber = Math.floor(Math.random() * 14);
    password1.textContent += availCharacters[randomNumber];
  }
  for (let i = 0; i < availCharacters.length; i++) {
    let randomNumber = Math.floor(Math.random() * 14);
    password2.textContent += availCharacters[randomNumber];
  }
  for (let i = 0; i < availCharacters.length; i++) {
    let randomNumber = Math.floor(Math.random() * 14);
    password3.textContent += availCharacters[randomNumber];
  }
  for (let i = 0; i < availCharacters.length; i++) {
    let randomNumber = Math.floor(Math.random() * 14);
    password4.textContent += availCharacters[randomNumber];
  }
}

// Event listeners

mainBtn.addEventListener("click", function () {
  password1.textContent = "";
  password2.textContent = "";
  password3.textContent = "";
  password4.textContent = "";
  displayPasswords();
});

// TO-DO List
//  1. Change textContent to value once html elements have been changed from buttons to text inputs

// 2. Enable 1 click copy to clipboard functionality after buttons have been changed to text inputs
