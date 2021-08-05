`use strict`

//This script is for starting the Creature of Pleiades game and filling in functions between chapters.

//------------------------Global Variables----------------------------//
let playScreen = document.getElementById('section2');
let newGameButtonElem = document.getElementById('newGameButton');
let loadGameButtonElem = document.getElementById('loadGame');
let startGameIdArr = ['name', 'location', 'color'];
let startGameTCArr = ['What\'s your name? ', 'What state are you from? ', 'What\'s your favorite color? '];
let userInfo = [];

//------------------------Global Functions----------------------------//
// function handleStartGame(e){
//   console.log(e);
//   //Create div to pop up after Start New Game button is clicked and gives ID for CSS styling the z-index and centering//
//   let startGameDiv = document.createElement('div');
//   startGameDiv.id = 'startGameDiv';
//   playScreen.appendChild(startGameDiv);
//   //Creates form for user input on name, gender, favorite color//
//   let startGameForm = document.createElement('form');
//   startGameForm.id = "startGameForm";
//   startGameDiv.appendChild(startGameForm);
//   let fieldsetElem = document.createElement('fieldset');
//   fieldsetElem.id = "fieldsetElem";
//   startGameForm.appendChild(fieldsetElem);
//   let legendElem = document.createElement('legend');
//   legendElem.textContent = 'Let\'s Get to Know You!';
//   fieldsetElem.appendChild(legendElem); 
//   for (let i = 0; i < startGameIdArr.length; i++){
//     let labelElem = document.createElement('label');
//     labelElem.classList.add("startGameLabel");
//     labelElem.textContent = startGameTCArr[i];
//     fieldsetElem.appendChild(labelElem);
//     let inputElem = document.createElement('input');
//     inputElem.type = 'text';
//     inputElem.classList.add("startGameInput");
//     inputElem.id = startGameIdArr[i];
//     labelElem.appendChild(inputElem);
//   }
//   //Creates button to submit user responses and renders Chapter One text/story//
//   let startChapterOneButton = document.createElement('button');
//   startChapterOneButton.type = 'submit';
//   startChapterOneButton.textContent = 'Continue';
//   startGameForm.appendChild(startChapterOneButton);
//   startGameDiv.addEventListener('submit', handleStartChapterOne);
// }

// function handleStartChapterOne(e) {
//   e.preventDefault();
//   for (let i = 1; i < 4; i++){
//     userInfo.push(e.target[i].value);
//   }
//   addUser();
//   location.href = "./html/chapters.html";
// }

function handleLoadGame(e){
  e.preventDefault();
  let storedUser = localStorage.getItem('user');
  if(storedUser){
    let parsedUser = JSON.parse(storedUser);
    userInfo.push(parsedUser.name);
    userInfo.push(parsedUser.location);
    userInfo.push(parsedUser.color);
    currentUser = new User(parsedUser.name, parsedUser.location, parsedUser.color);
    // location.href = "./html/chapters.html" // need to add the location they left off from //
    // if (chapterCounter === 1){
    //   load chapter one
    // } else if (chapterCounter === 2){
    // load chapter two
    // } else if (chapterCounter === 3){
    // load chapter three
    // } else if (chapterCounter === 4){
    // load chapter one
    // } else {
    //   load chapter 5
  } else {
    alert('Sorry, there are currently no saved users.');
  }
}


function addUser(){
  currentUser = new User(userInfo[0], userInfo[1], userInfo[2]);
  let preppedUser = JSON.stringify(currentUser);
  localStorage.setItem('user', preppedUser);
}

//------------------------Constructor/Objects----------------------------//
const User = function(name, location, color){
  this.name = name;
  this.location = location;
  this.color = color;
}

let currentUser = new User(userInfo[0], userInfo[1], userInfo[2]);


//------------------------Event Listeners----------------------------//
// newGameButtonElem.addEventListener('click', handleStartGame);
loadGameButtonElem.addEventListener('click', handleLoadGame);




//------------------------Calling Functions----------------------------//
