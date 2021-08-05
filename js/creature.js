'use strict';

/* --------------------------------------------------------------------------------GLOBAL VARIABLES */
const evoOne = ['../img/creatureparts/1-BRING.png', '../img/creatureparts/1-LEAVE.png', '../img/creatureparts/1-SCARE.png'];
const evoTwo = ['../img/creatureparts/2-GARBAGE.png', '../img/creatureparts/2-VEGGIES.png', '../img/creatureparts/2-MEAT.png'];
const evoThree = ['../img/creatureparts/3-TRUTH.png', '../img/creatureparts/3-IGNORE.png', '../img/creatureparts/3-LIE.png'];
const evoFour = ['../img/creatureparts/4-UPSTAIRS.png', '../img/creatureparts/4-BACKDOOR.png', '../img/creatureparts/4-OPEN.png'];
const evoFive = ['../img/creatureparts/5-INSTINCTS.png', '../img/creatureparts/5-LAB.png', '../img/creatureparts/5-SPACESHIP.png'];
const evoSix = ['../img/creatureparts/6-FINALBAD.png', '../img/creatureparts/6-FINALGOOD.png'];
let startGameDiv = document.getElementById('startGameDiv');
let startGameForm = document.createElement('form');
//Variables for the different evolution images
const creatureDivElem = document.getElementById('creature');
//variable for the location of the creature div
const formOneElem = document.getElementById('firstchoice');
const formTwoElem = document.getElementById('secondchoice');
const formThreeElem = document.getElementById('thirdchoice');
const formFourElem = document.getElementById('fourthchoice');
const formFiveElem = document.getElementById('fifthchoice');
//form location variables
const startButtonElem = document.getElementById('startgame');
//variable for the start button on the game page
let formArray = [formOneElem, formTwoElem, formThreeElem, formFourElem, formFiveElem];
//an array for the references to the form elements for each of the 5 evolution forms.
let myCreature = new Creature();
// creates a creature named Randy and sets it to variable myCreature



/* --------------------------------------------------------------------------------CONSTRUCTOR */
function Creature() {
  this.creatureName = null;
  this.traitOne = null;
  this.traitTwo = null;
  this.traitThree = null;
  this.traitFour = null;
  this.traitFive = null;
  this.traitSix = null;
  this.creatureScore = 0;
}




/* --------------------------------------------------------------------------------CONSTRUCTORMETHODS */
Creature.prototype.renderCreature = function () {
  creatureDivElem.textContent = '';
  //clears out any currently rendered creature
  if (this.traitOne) {
    const imgElemOne = document.createElement('img');
    imgElemOne.src = this.traitOne;
    imgElemOne.id = 'traitone';
    creatureDivElem.appendChild(imgElemOne);
    if (this.traitTwo) {
      const imgElemTwo = document.createElement('img');
      imgElemTwo.src = this.traitTwo;
      imgElemTwo.id = 'traittwo';
      creatureDivElem.appendChild(imgElemTwo);
      if (this.traitThree) {
        const imgElemThree = document.createElement('img');
        imgElemThree.src = this.traitThree;
        imgElemThree.id = 'traitthree';
        creatureDivElem.appendChild(imgElemThree);
        if (this.traitFour) {
          const imgElemFour = document.createElement('img');
          imgElemFour.src = this.traitFour;
          imgElemFour.id = 'traitfour';
          creatureDivElem.appendChild(imgElemFour);
          if (this.traitFive) {
            const imgElemFive = document.createElement('img');
            imgElemFive.src = this.traitFive;
            imgElemFive.id = 'traitfive';
            creatureDivElem.appendChild(imgElemFive);
            if (this.traitSix) {
              const imgElemSix = document.createElement('img');
              imgElemSix.src = this.traitSix;
              imgElemSix.id = 'traitsix';
              creatureDivElem.appendChild(imgElemSix);
            }
          }
        }
      }
    }
  }
}
//method for rendering the creature on the page.  Checks for trait values on the myCreature instance, and then creates an image based on the image path in the array.  Does this for each layer that has a value on the creature.
Creature.prototype.addFirstTrait = function (choiceIndex) {
  this.traitOne = evoOne[choiceIndex];
}
Creature.prototype.addSecondTrait = function (choiceIndex) {
  this.traitTwo = evoTwo[choiceIndex];
}
Creature.prototype.addThirdTrait = function (choiceIndex) {
  this.traitThree = evoThree[choiceIndex];
}
Creature.prototype.addFourthTrait = function (choiceIndex) {
  this.traitFour = evoFour[choiceIndex];
}
Creature.prototype.addFifthTrait = function (choiceIndex) {
  this.traitFive = evoFive[choiceIndex];
}
//prototype methods that pull img links from arrays and put them into the creatures traits
Creature.prototype.changeCreatureScore = function (value) {
  if (value === 0) {
    this.creatureScore++;
  } else if (value === 2) {
    this.creatureScore--;
  }
}
//changes creature score
Creature.prototype.getFinalScore = function () {
  let finalScore = this.creatureScore;
  return finalScore;
}
// this gets the final score of myCreature




/* --------------------------------------------------------------------------------GLOBAL FUNCTIONS */





/* --------------------------------------------------------------------------------HANDLER FUNCTIONS */
function handleStartButton(e){
  console.log(e);
  //Create div to pop up after Start New Game button is clicked and gives ID for CSS styling the z-index and centering//
  
  startGameDiv.id = 'startGameDiv';
  startGameDiv.display = 'block';
  //Creates form for user input on name, gender, favorite color//
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
  startGameDiv.addEventListener('submit', handleStartChapterOne);


  // chapterArray[currentChapterIndex].getNextPara();
  // chapterArray[currentChapterIndex].pullChapterData();
  // nextButtonElem.style.display = 'block';
}

function handleStartChapterOne(e) {
  e.preventDefault();
  for (let i = 1; i < 4; i++){
    let userData = e.target[i].value;
    let userDataProper = userData.toUpperCase();
    userInfo.push(userDataProper);
  }
  addUser();
  startGameForm.style.display = 'none';

  renderChapters();

  chapterArray[currentChapterIndex].getNextPara();
  chapterArray[currentChapterIndex].pullChapterData();
  nextButtonElem.style.display = 'block';
  startButtonElem.removeEventListener('click', handleStartButton);
}

function handleSubmitOne(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (e.target[i].checked) {
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFirstTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formOneElem.style.display = 'none';
      chapterArray[currentChapterIndex].pullChapterData();
    }
  }
}
function handleSubmitTwo(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (e.target[i].checked) {
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addSecondTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formTwoElem.style.display = 'none';
      chapterArray[currentChapterIndex].pullChapterData();
    }
  }
}
function handleSubmitThree(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (e.target[i].checked) {
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addThirdTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formThreeElem.style.display = 'none';
      chapterArray[currentChapterIndex].pullChapterData();
    }
  }
}
function handleSubmitFour(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (e.target[i].checked) {
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFourthTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formFourElem.style.display = 'none';
      chapterArray[currentChapterIndex].pullChapterData();
    }
  }
}
function handleSubmitFive(e) {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (e.target[i].checked) {
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFifthTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      if (myCreature.getFinalScore() === -5) {
        currentChapterIndex++;
        chapterArray[currentChapterIndex].getNextPara();
        nextButtonElem.style.display = 'block';
        formFiveElem.style.display = 'none';
        chapterArray[currentChapterIndex].pullChapterData();
        myCreature.traitSix = evoSix[0];
        myCreature.renderCreature();
      } else if (myCreature.getFinalScore() > -5 && myCreature.getFinalScore() < -1) {
        currentChapterIndex += 2;
        chapterArray[currentChapterIndex].getNextPara();
        nextButtonElem.style.display = 'block';
        formFiveElem.style.display = 'none';
        chapterArray[currentChapterIndex].pullChapterData();
      } else if (myCreature.getFinalScore() > -2 && myCreature.getFinalScore() < 2) {
        currentChapterIndex += 3;
        chapterArray[currentChapterIndex].getNextPara();
        nextButtonElem.style.display = 'block';
        formFiveElem.style.display = 'none';
        chapterArray[currentChapterIndex].pullChapterData();
      } else if (myCreature.getFinalScore() > 1 && myCreature.getFinalScore() < 5) {
        currentChapterIndex += 4;
        chapterArray[currentChapterIndex].getNextPara();
        nextButtonElem.style.display = 'block';
        formFiveElem.style.display = 'none';
        chapterArray[currentChapterIndex].pullChapterData();
      } else if (myCreature.getFinalScore() === 5) {
        currentChapterIndex += 5;
        chapterArray[currentChapterIndex].getNextPara();
        nextButtonElem.style.display = 'block';
        formFiveElem.style.display = 'none';
        chapterArray[currentChapterIndex].pullChapterData();
        myCreature.traitSix = evoSix[1];
        myCreature.renderCreature();
      }
    }
  }
}
//Listen for submit on radio button forms.  then cycles through the index of the possible targets (the three options) and checks for truthyness on their checked trait.  Whichever one is true, will pass the index on to the addNthTrait method and then render the creature.




/* --------------------------------------------------------------------------------LISTENERS */
startButtonElem.addEventListener('click', handleStartButton);
formOneElem.addEventListener('submit', handleSubmitOne);
formTwoElem.addEventListener('submit', handleSubmitTwo);
formThreeElem.addEventListener('submit', handleSubmitThree);
formFourElem.addEventListener('submit', handleSubmitFour);
formFiveElem.addEventListener('submit', handleSubmitFive);
//event listener for the submit on the first form




/* --------------------------------------------------------------------------------CALL FUNCTIONS */
