console.log("script running!");

// Tippy the goat
const button1 = document.querySelector("#button1");
const playTippy = document.querySelector("#play-tippy");
const feedTippy = document.querySelector("#feed-tippy");
const brushTippy = document.querySelector("#brush-tippy");

let tHappiness = 10;
let tEnergy = 10;
let tFullness = 10;
let tCleanliness = 10;

button1.addEventListener('click', e => {
  console.log('button1 clicked');
  alert('Meh-eh-eh-eh-eh!');
});

playTippy.addEventListener('click', e => {
  console.log('playTippy clicked');
  tHappiness += 1;
  tEnergy -= 1;
  alert(`Tippy's happiness is ${tHappiness}, energy is ${tEnergy}, fullness is ${tFullness}, and cleanliness is ${tCleanliness}.`)
});

feedTippy.addEventListener('click', e => {
  console.log('feedTippy clicked');
  tHappiness += 1;
  tFullness += 1;
  alert(`Tippy's happiness is ${tHappiness}, energy is ${tEnergy}, fullness is ${tFullness}, and cleanliness is ${tCleanliness}.`)
});

brushTippy.addEventListener('click', e => {
  console.log('brushTippy clicked');
  tHappiness += 1;
  tCleanliness += 1;
  alert(`Tippy's happiness is ${tHappiness}, energy is ${tEnergy}, fullness is ${tFullness}, and cleanliness is ${tCleanliness}.`)
});

// -------------------------------------------------------------------------

// Brodie the bunny
const button2 = document.querySelector("#button2");
const playBrodie = document.querySelector("#play-brodie");
const feedBrodie = document.querySelector("#feed-brodie");
const brushBrodie = document.querySelector("#brush-brodie");

let bHappiness = 10;
let bEnergy = 10;
let bFullness = 10;
let bCleanliness = 10;

button2.addEventListener('click', e => {
  console.log('button2 clicked');
  const brodieStatus = document.querySelector("#status2");
  brodieStatus.innerHTML = 'Thank you for petting Brodie the Bunny!';
});

playBrodie.addEventListener('click', e => {
  console.log('playBrodie clicked');
  bHappiness += 1;
  bEnergy -= 1;
  alert(`Brodie's happiness is ${bHappiness}, energy is ${bEnergy}, fullness is ${bFullness}, and cleanliness is ${bCleanliness}.`)
});

feedBrodie.addEventListener('click', e => {
  console.log('playBrodie clicked');
  bHappiness += 1;
  bFullness += 1;
  alert(`Brodie's happiness is ${bHappiness}, energy is ${bEnergy}, fullness is ${bFullness}, and cleanliness is ${bCleanliness}.`)
});

brushBrodie.addEventListener('click', e => {
  console.log('brushBrodie clicked');
  bHappiness += 1;
  bCleanliness += 1;
  alert(`Brodie's happiness is ${bHappiness}, energy is ${bEnergy}, fullness is ${bFullness}, and cleanliness is ${bCleanliness}.`)
});

// -------------------------------------------------------------------------

// Coco the mama goat
let numClicks = 2;
let cHappiness = 10;
let cEnergy = 10;
let cFullness = 10;
let cCleanliness = 10;

const button3 = document.querySelector("#button3");
const playCoco = document.querySelector("#play-coco");
const brushCoco = document.querySelector("#brush-coco");

button3.addEventListener('click', e => {
  console.log('button3 clicked');
  
  if (numClicks >= 10) {
    alert("Coco is now full. No more feeding her carrots!");
    button3.style.visibility = 'hidden';
  } else {
    numClicks += 1;
    cEnergy += 1;
    cFullness += 1;
    alert(`Coco's happiness is ${cHappiness}, energy is ${cEnergy}, fullness is ${cFullness}, and cleanliness is ${cCleanliness}.`)
  }
  const cocoStatus = document.querySelector("#status3");
  //cocoStatus.innerHTML = "Thank you for feeding Coco! Coco has had " + numClicks + " carrots today.";
  cocoStatus.innerHTML = `Coco has had ${numClicks} carrots today`; //template strings
});

playCoco.addEventListener('click', e => {
  console.log('playCoco clicked');
  cHappiness += 1;
  cEnergy -= 1;
  alert(`Coco's happiness is ${cHappiness}, energy is ${cEnergy}, fullness is ${cFullness}, and cleanliness is ${cCleanliness}.`)
});

brushCoco.addEventListener('click', e => {
  console.log('brushCoco clicked');
  cHappiness += 1;
  cCleanliness += 1;
  alert(`Coco's happiness is ${cHappiness}, energy is ${cEnergy}, fullness is ${cFullness}, and cleanliness is ${cCleanliness}.`)
});

// -------------------------------------------------------------------------

// Arno the alligator
let aHappiness = 10;
let aEnergy = 10;
let aFullness = 10;
let aCleanliness = 10;

const button4 = document.querySelector("#button4");
const playArno = document.querySelector("#play-arno");
const brushArno = document.querySelector("#brush-arno");
const zoo = document.querySelector(".container")
console.log(zoo)

button4.addEventListener('click', e => {
  console.log('button4 clicked');
  let destroy = confirm("Are you sure you want to pet Arno? He might bite you!");
  if (destroy == true) {
    zoo.innerHTML = `<h1 class="title">Due to unforeseen circumstances involving an idiotic zoo-goer who tried to pet Arno the Alligator, the zoo has ben temporarily closed. Have a nice day!</h1>`;
  }
  /*
  aEnergy += 1;
  aFullness += 1;
  zoo.innerHTML = `<h1 class="title">How dare you feed this dog! You have ruined the entire website.</h1>`
  alert(`Arno's happiness is ${aHappiness}, energy is ${aEnergy}, fullness is ${aFullness}, and cleanliness is ${aCleanliness}.`)
  */
});

playArno.addEventListener('click', e => {
  console.log('playArno clicked');
  aHappiness += 1;
  aEnergy -= 1;
  alert(`Arno's happiness is ${aHappiness}, energy is ${aEnergy}, fullness is ${aFullness}, and cleanliness is ${aCleanliness}.`)
});

brushArno.addEventListener('click', e => {
  console.log('brushArno clicked');
  aHappiness += 1;
  aCleanliness += 1;
  alert(`Arno's happiness is ${aHappiness}, energy is ${aEnergy}, fullness is ${aFullness}, and cleanliness is ${aCleanliness}.`)
});

// -------------------------------------------------------------------------

// Daniel the Dog
let dHappiness = 10;
let dEnergy = 10;
let dFullness = 10;
let dCleanliness = 10;

const button5 = document.querySelector("#button5");
const playDaniel = document.querySelector("#play-daniel");
const brushDaniel = document.querySelector("#brush-daniel");

button5.addEventListener('click', e => {
  console.log('button5 clicked');
  dEnergy += 1;
  dFullness += 1;
  //zoo.innerHTML = `<h1 class="title">How dare you feed this dog! You have ruined the entire website.</h1>`
  alert(`Daniel's happiness is ${dHappiness}, energy is ${dEnergy}, fullness is ${dFullness}, and cleanliness is ${dCleanliness}.`)
});

playDaniel.addEventListener('click', e => {
  console.log('playDaniel clicked');
  dHappiness += 1;
  dEnergy -= 1;
  alert(`Daniel's happiness is ${dHappiness}, energy is ${dEnergy}, fullness is ${dFullness}, and cleanliness is ${dCleanliness}.`)
});

brushDaniel.addEventListener('click', e => {
  console.log('brushDaniel clicked');
  dHappiness += 1;
  dCleanliness += 1;
  alert(`Daniel's happiness is ${dHappiness}, energy is ${dEnergy}, fullness is ${dFullness}, and cleanliness is ${dCleanliness}.`)
});


