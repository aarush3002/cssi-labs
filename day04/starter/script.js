/*
Today's agenda:

1. Quick Day 3 & JavaScript review
2. Listening to events with the "change" event listener
3. Controlling flow with if-else clauses
4. Adding and removing classes to HTML elements

*/

console.log("script running");

let numLanguages = null;
let numCorrectGuesses = 0;

class Language {  
  constructor(name, caption) {
    this.name = name;
    this.caption = caption;
    this.isGuessed = false;
    this.tile = document.querySelector(`#${this.name}`);
  };
} 

let english = new Language("English", "Hello World");
let spanish = new Language("Spanish", "Hola Mundo");
let chinese = new Language("Chinese");
let tagalog = new Language("Tagalog");
let vietnamese = new Language("Vietnamese");
let arabic = new Language("Arabic");
let french = new Language("French");
let korean = new Language("Korean");
let russian = new Language("Russian");

//make an array with all the languages and set numLanguages to the array's length.
let langArray = [english, spanish, chinese, tagalog, vietnamese, arabic, french, korean, russian];
numLanguages = langArray.length;
console.log(`Number of languages: ${numLanguages}`)

//log each of the elements in the array
langArray.forEach(element => {
  console.log(element.tile);
});


// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

//the main functionality of the code!
//create eventListener for the inputField
inputField.addEventListener("change", e => {
  let userGuess = inputField.value;
  userGuess = userGuess.toLowerCase();
  userGuess = userGuess.trim();
  console.log(`User guess is ${userGuess}`);
  
  // for (let i = 0; i < langArray.length; i++) {
  //   if(!langArray[i].isGuessed && userGuess === langArray[i].name.toLowerCase()) {
  //     console.log(`Match found in language: ${userGuess}`);
  //     element.tile.classList.remove("hidden");
  //     element.isGuessed = true;
  //     inputField.value = "";
  //     //remove element from array
  //     console.log(langArray.element.index);
  //   }
  // }
  
  //iterate through the array
  langArray.forEach((element, index) => {
    //compare userGuess to the element's name property. if there's a match, show the element and display its tile.
    if(!element.isGuessed && userGuess === element.name.toLowerCase()) {
      console.log(`Match found in language: ${userGuess}`);
      element.tile.classList.remove("hidden");
      
      numCorrectGuesses++;
      element.isGuessed = true;
    }
  });
  
  //log the amount of points the user has earned and clear the input field.
  console.log(`Points: ${numCorrectGuesses}`);
  inputField.value = "";
  
  //once the user earns all the points, we will show a congratulatory banner.
  if(numCorrectGuesses === numLanguages) {
    document.querySelector("#success-banner").classList.remove("hidden");
  }
});