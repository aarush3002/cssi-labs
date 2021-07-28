/*

Today's Agenda:

1. Week 1 in review
2. Introducing Application Programming Interfaces (APIs)
3. Working with JSON objects
4. Calling APIs from JavaScript
5. Working with Promises: then() & catch()

Web APIs used today:
   
+ https://jservice.io/api/random
+ https://api.giphy.com/

Other open APIs:

+ https://www.loc.gov/pictures/search/?c=100&fo=json&q=lincoln
+ https://swapi.dev/api/starships/?search=destroyer&format=json

*/
console.log("Script running");

// We'll want to get some random integers, and that isn't built right into JavaScript.
// Here's a pre-built function that will do it for ya.
const getRandom = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", (e) => {
  let myKey = 'IJKmXZpBWUGRrfvxEuDSG4DEaZPTIzZ7';
  let topic = queryField.value;
  console.log(topic);
  
  // indicate to customer/user that we're processing the result
  // send request to Giphy service -- using search endpoint
  //    pass along topic from input
  //    This returns a JSON structure
  
  const giphy = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;
  console.log(giphy);
  
  fetch(giphy) // returns a promise... which needs to be resolved ... are asynchronous
    .then(response => response.json()) // .json() returns another promise, which should be resolved with .then()
    .then(data => { 
      // get data from request
      console.log(data); 
    
      // parse request for data we want
      //    save in variable
      const myGifs = data.data;
      const randomItem = Math.floor(Math.random()*myGifs.length);
      const firstGif = myGifs[randomItem];
      const firstGifUrl = firstGif.images.downsized.url;
      
      // Present the data in a new image in our web app
      const gifCard = document.querySelector("#imageholder")
      const imgForCard = document.createElement("img");
      imgForCard.setAttribute("src", firstGifUrl);
      
      // Build our Document Object Model (DOM) tree
      gifCard.appendChild(imgForCard);
      
    })
    .catch(err => {
      // check to see if request is successful
      //    If the request is unsuccessful, provide an error message
      console.log(`Something bad happened ... ${err}`);
    });
});