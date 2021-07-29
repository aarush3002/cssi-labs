const baseURL = "https://foodish-api.herokuapp.com"; // Base URL for all api calls

var foodURL, foodCategory;

function callAPI() {
  var req = new XMLHttpRequest();

  // json = await (await fetch(url)).json();
  req.open("GET", baseURL + "/api/", false); // Should return a random image of food
  req.send(null);

  return JSON.parse(req.responseText); // Returns json object with example response: {"image":"https://foodish-api.herokuapp.com/images/burger/burger101.jpg"}
}

function getFood() {
  // returns json object with food name and image url
  let ogJSON = callAPI();

  /**
   * Parse out the category from the url
   * Regex groups:
   * Group 1: base url - Can be ignored safely
   * Group 2: food category - NEEDED
   * Group 3: image name - Can be ignored safely
   */
  let regEx = /(https:\/\/foodish-api\.herokuapp\.com\/images\/)([\w,-]+)(\/.*)/;

  let match = regEx.exec(ogJSON["image"]);
  let category = match[2]; // Extract the food category

  let returnObj = {
    url: ogJSON["image"],
    category: category
  };

  return returnObj;
}

function refreshFood() {
  let foodObj = getFood();

  foodURL = foodObj.url;
  foodCategory = foodObj.category.toLowerCase().trim();
  console.log(foodCategory);
}

// Load image when the page loads in
window.onload = function() {
  // Handle HTML stuff
  console.log("oof");
  // const foot = document.querySelector(".footer");
  // foot.style.backgroundColor = "yellow";
  // document.querySelector("#feedback").innerHTML = "Make your guess!"
  const inputField = document.querySelector("#guess");
  const image = document.querySelector("#img");

  refreshFood();

  image.setAttribute("src", foodURL);
  let foodName = foodCategory;

  inputField.addEventListener("change", e => {
    console.log("CHANGE DETECTED!");
    let userGuess = inputField.value;
    userGuess = userGuess.toLowerCase().trim();
    const foot = document.querySelector(".footer");

    console.log(`User guess is ${userGuess}`);

    if (userGuess === foodName || userGuess === "cheat") {
      foot.style.backgroundColor = "green";
      document.querySelector("#feedback").innerHTML = "Correct!";
      refreshFood();
      image.setAttribute("src", foodURL);
      foodName = foodCategory;
    } else if (userGuess === "skip") {
      foot.style.backgroundColor = "#1c6fa7";
      document.querySelector("#feedback").innerHTML = "Skipped!";
      
      refreshFood();
      image.setAttribute("src", foodURL);
      foodName = foodCategory;
    } else {
      foot.style.backgroundColor = "red";
      document.querySelector("#feedback").innerHTML = "Incorrect!";
    }
    inputField.value = "";
  });
};
