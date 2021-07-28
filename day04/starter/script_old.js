/*
Today's agenda:

1. Quick Day 3 & JavaScript review
2. Listening to events with the "change" event listener
3. Controlling flow with if-else clauses
4. Adding and removing classes to HTML elements

*/

console.log("script running");

let numLanguages = 9;
let numCorrectGuesses = 0;

class Language {  
  constructor(name) {
    this.name = name;
    this.isGuessed = false;
    this.tile = document.querySelector(`#${this.name}`);
  };
} 

let english = new Language("English");
let spanish = new Language("Spanish");
let chinese = new Language("Chinese");
let tagalog = new Language("Tagalog");
let vietnamese = new Language("Vietnamese");
let arabic = new Language("Arabic");
let french = new Language("French");
let korean = new Language("Korean");
let russian = new Language("Russian");

// Fix these querySelectors so that they each select the correct element.
// const englishTile = document.querySelector("#English");
// const spanishTile = document.querySelector("#Spanish");
// const chineseTile = document.querySelector("#Chinese");
// const tagalogTile = document.querySelector("#Tagalog");
// const vietnameseTile = document.querySelector("#Vietnamese");
// const arabicTile = document.querySelector("#Arabic");
// const frenchTile = document.querySelector("#French");
// const koreanTile = document.querySelector("#Korean");
// const russianTile = document.querySelector("#Russian");

console.log(english.tile);
console.log(spanish.tile);

// console.log(spanishTile);
// console.log(chineseTile);
// console.log(tagalogTile);
// console.log(vietnameseTile);
// console.log(arabicTile);
// console.log(frenchTile);
// console.log(koreanTile);
// console.log(russianTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

// inputField.addEventListener("change", e => {
//   let userGuess = inputField.value;
//   userGuess = userGuess.toLowerCase();
//   userGuess = userGuess.trim();
//   console.log(`User guess is ${userGuess}`);
  
//   if(userGuess == "english") {
//     englishTile.classList.remove("hidden");
//   } else if(userGuess == "spanish") {
//     spanishTile.classList.remove("hidden");
//   } else if(userGuess == "chinese") {
//     chineseTile.classList.remove("hidden");
//   } else if(userGuess == "tagalog") {
//     tagalogTile.classList.remove("hidden");
//   } else if(userGuess == "vietnamese") {
//     vietnameseTile.classList.remove("hidden");
//   } else if(userGuess == "arabic") {
//     arabicTile.classList.remove("hidden");
//   } else if(userGuess == "french") {
//     frenchTile.classList.remove("hidden");
//   } else if(userGuess == "korean") {
//     koreanTile.classList.remove("hidden");
//   } else if(userGuess == "russian") {
//     russianTile.classList.remove("hidden");
//   }
// });
  
  
//   class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100