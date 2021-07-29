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
  let myKey = 'YOUR_API_KEY_HERE';
  let topic = queryField.value;
  console.log(topic);
  let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;
  console.log(myQuery);
  fetch(myQuery)
    .then(response => response.json())
    .then(myJson => {
      const countGifs = myJson.data.length;
      const i = getRandom(countGifs);
      let imgUrl = myJson.data[i].images.downsized.url;
      console.log(imgUrl);
      imageHolderDiv.innerHTML = `<img src="${imgUrl}"/>` + imageHolderDiv.innerHTML;
    })
    .catch(error => {
      console.log(error);
    });
  
});