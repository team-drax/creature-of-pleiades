`use strict`

//This script is for starting the Creature of Pleiades game and filling in functions between chapters.

//------------------------Global Variables----------------------------//
let playScreen = document.querySelector('section1');
let newGameButtonElem = document.getElementById('newGameButton');

//------------------------Global Functions----------------------------//
function handleStartGame(){
  //Create div to pop up after Start New Game button is clicked and gives ID for CSS styling the z-index and centering//
  let startGameDiv = document.createElement('div');
  startGameDiv.id = 'startGameDiv';
  playScreen.appendChild(startGameDiv);
  //Creates form for user input on name, gender, favorite color//
  let startGameForm = document.createElement('form');
  startGameForm.id = "startGameForm";
  startGameDiv.appendChild(startGameForm);
  let fieldsetElem = document.createElement('fieldset');
  let legendElem = document.createElement('legend');
  legendElem.textContent = 'Let\'s Get to Know You!';
  fieldsetElem.appendChild(legendElem);
  let labelElem = document.createElement('label');
  labelElem.textContent = 'What\'s your name?';
  fieldsetElem.appendChild(labelElem);
  let inputElem = document.createElement('input');
  inputElem.type = 'text';
  inputElem.id = 'name';
  labelElem.appendChild(inputElem); 
  let label2Elem = document.createElement('label');
  label2Elem.textContent = 'What\'s your gender?';
  fieldsetElem.appendChild(label2Elem);
  let input2Elem = document.createElement('input');
  input2Elem.type = 'text';
  input2Elem.id = 'gender';
  label2Elem.appendChild(input2Elem);
  let label3Elem = document.createElement('label');
  label3Elem.textContent = 'Where are you located?';
  fieldsetElem.appendChild(label3Elem);
  let input3Elem = document.createElement('input');
  input3Elem.type = 'text';
  input3Elem.id = 'location';
  label3Elem.appendChild(input3Elem);
  let label4Elem = document.createElement('label');
  label4Elem.textContent = 'What\'s your favorite color?';
  fieldsetElem.appendChild(label4Elem);
  let input4Elem = document.createElement('input');
  input4Elem.type = 'text';
  input4Elem.id = 'color';
  label4Elem.appendChild(input4Elem);
  //Creates button to submit user responses and renders Chapter One text/story//
  let startChapterOneButton = document.createElement('button');
  startChapterOneButton.type = 'submit';
  startChapterOneButton.textContent = 'Continue';
  startChapterOneButton.addEventListener('submit', handleStartChapterOne);
  startChapterOneButton.onclick(renderChapterOne());
}

//------------------------Constructor/Objects----------------------------//






//------------------------Event Listeners----------------------------//
newGameButtonElem.addEventListener('click', handleStartGame);





//------------------------Calling Functions----------------------------//
