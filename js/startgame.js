`use strict`

//This script is for starting the Creature of Pleiades game and filling in functions between chapters.

//------------------------Global Variables----------------------------//
let playScreen = document.getElementById('section2');
let newGameButtonElem = document.getElementById('newGameButton');
let startGameIdArr = ['name', 'location', 'color'];
let startGameTCArr = ['What\'s your name? ', 'Where are you located? ', 'What\'s your favorite color? '];

//------------------------Global Functions----------------------------//
function handleStartGame(e){
  console.log(e);
  //Create div to pop up after Start New Game button is clicked and gives ID for CSS styling the z-index and centering//
  let startGameDiv = document.createElement('div');
  startGameDiv.id = 'startGameDiv';
  playScreen.appendChild(startGameDiv);
  //Creates form for user input on name, gender, favorite color//
  let startGameForm = document.createElement('form');
  startGameForm.id = "startGameForm";
  startGameDiv.appendChild(startGameForm);
  let fieldsetElem = document.createElement('fieldset');
  fieldsetElem.id = "fieldsetElem";
  startGameForm.appendChild(fieldsetElem);
  let legendElem = document.createElement('legend');
  legendElem.textContent = 'Let\'s Get to Know You!';
  fieldsetElem.appendChild(legendElem); 
  for (let i = 0; i < startGameIdArr.length; i++){
    let labelElem = document.createElement('label');
    labelElem.classList.add("startGameLabel");
    labelElem.textContent = startGameTCArr[i];
    fieldsetElem.appendChild(labelElem);
    let inputElem = document.createElement('input');
    inputElem.type = 'text';
    inputElem.classList.add("startGameInput");
    inputElem.id = startGameIdArr[i];
    labelElem.appendChild(inputElem);
  }
  //Creates button to submit user responses and renders Chapter One text/story//
  let startChapterOneButton = document.createElement('button');
  startChapterOneButton.type = 'submit';
  startChapterOneButton.textContent = 'Continue';
  startGameForm.appendChild(startChapterOneButton);
  // startChapterOneButton.addEventListener('submit', handleStartChapterOne);
  // startChapterOneButton.onclick(renderChapterOne());
  // startChapterOneButton.onclick(location.href = "./html/about.html")
  startChapterOneButton.addEventListener('click', handleStartChapterOne);

}

function handleStartChapterOne(e) {
  e.preventDefault();
  location.href = "./html/chapters.html";
}

// startGameOnClick(startChapterOneButton);


//------------------------Constructor/Objects----------------------------//






//------------------------Event Listeners----------------------------//
newGameButtonElem.addEventListener('click', handleStartGame);





//------------------------Calling Functions----------------------------//
