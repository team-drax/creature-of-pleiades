'use strict';

/* --------------------------------------------------------------------------------GLOBAL VARIABLES */
const evoOne = ['../img/creatureparts/1-BRING.png', '../img/creatureparts/1-LEAVE.png', '../img/creatureparts/1-SCARE.png'];
const evoTwo = ['../img/creatureparts/2-GARBAGE.png', '../img/creatureparts/2-VEGGIES.png', '../img/creatureparts/2-MEAT.png'];
const evoThree = ['../img/creatureparts/3-TRUTH.png', '../img/creatureparts/3-IGNORE.png', '../img/creatureparts/3-LIE.png'];
const evoFour = ['../img/creatureparts/4-UPSTAIRS.png', '../img/creatureparts/4-BACKDOOR.png', '../img/creatureparts/4-OPEN.png'];
const evoFive = ['../img/creatureparts/5-INSTINCTS.png', '../img/creatureparts/5-LAB.png', '../img/creatureparts/5-SPACESHIP.png'];
//Variables for the different evolution images
const creatureDivElem = document.getElementById('creature');
//variable for the location of the creature div
const formOneElem = document.getElementById('firstchoice');
const formTwoElem = document.getElementById('secondchoice');
const formThreeElem = document.getElementById('thirdchoice');
const formFourElem = document.getElementById('fourthchoice');
const formFiveElem = document.getElementById('fifthchoice');
//variable for the location for the question one form
let formArray = [formOneElem, formTwoElem, formThreeElem, formFourElem, formFiveElem];
//an array for the references to the form elements for each of the 5 evolution forms.
let myCreature = new Creature();
// creates a creature named Randy and sets it to variable myCreature
console.log(myCreature);


/* --------------------------------------------------------------------------------CONSTRUCTOR */
function Creature (){
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
Creature.prototype.renderCreature = function(){
  creatureDivElem.textContent = '';
  //clears out any currently rendered creature
  if (this.traitOne){
    const imgElemOne = document.createElement('img'); 
    imgElemOne.src = this.traitOne; 
    imgElemOne.id = 'traitone'; 
    creatureDivElem.appendChild(imgElemOne);
    if(this.traitTwo){
      const imgElemTwo = document.createElement('img');
      imgElemTwo.src = this.traitTwo;
      imgElemTwo.id = 'traittwo';
      creatureDivElem.appendChild(imgElemTwo);
      if(this.traitThree){
        const imgElemThree = document.createElement('img');
        imgElemThree.src = this.traitThree;
        imgElemThree.id = 'traitthree';
        creatureDivElem.appendChild(imgElemThree);
        if (this.traitFour){
          const imgElemFour = document.createElement('img');
          imgElemFour.src = this.traitFour;
          imgElemFour.id = 'traitfour';
          creatureDivElem.appendChild(imgElemFour);
          if (this.traitFive){
            const imgElemFive = document.createElement('img');
            imgElemFive.src = this.traitFive;
            imgElemFive.id = 'traitfive';
            creatureDivElem.appendChild(imgElemFive);
            if (this.traitSix){
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

Creature.prototype.addFirstTrait = function(choiceIndex){
  this.traitOne = evoOne[choiceIndex];
}
Creature.prototype.addSecondTrait = function(choiceIndex){
  this.traitTwo = evoTwo[choiceIndex];
}
Creature.prototype.addThirdTrait = function(choiceIndex){
  this.traitThree = evoThree[choiceIndex];
}
Creature.prototype.addFourthTrait = function(choiceIndex){
  this.traitFour = evoFour[choiceIndex];
}
Creature.prototype.addFifthTrait = function(choiceIndex){
  this.traitFive = evoFive[choiceIndex];
}
//prototype methods that pull img links from arrays and put them into the creatures traits

Creature.prototype.changeCreatureScore = function(value){
  if (value === 0){
    this.creatureScore++;
  } else if (value === 2){
    this.creatureScore--;
  }
}
//changes creature score


/* --------------------------------------------------------------------------------GLOBAL FUNCTIONS */





/* --------------------------------------------------------------------------------HANDLER FUNCTIONS */
function handleSubmitOne(e){
  e.preventDefault();
  console.log(e);
  for (let i=0; i<3; i++){
    if (e.target[i].checked){
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFirstTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++;
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formOneElem.style.display = 'none';
      // if (checkedValue === 0){
      //   //go to positive chapter two
      // }else if (checkedValue === 1){
      //   //go to neutral path chapter two
      // }else{
      //   //go to negative path chapter two
      // }
    }
  }
}
function handleSubmitTwo(e){
  e.preventDefault();
  for (let i=0; i<3; i++){
    if (e.target[i].checked){
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addSecondTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++;
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formTwoElem.style.display = 'none';
    }
  }
}
function handleSubmitThree(e){
  e.preventDefault();
  for (let i=0; i<3; i++){
    if (e.target[i].checked){
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addThirdTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++;
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formThreeElem.style.display = 'none';
    }
  }
}
function handleSubmitFour(e){
  e.preventDefault();
  for (let i=0; i<3; i++){
    if (e.target[i].checked){
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFourthTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++;
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formFourElem.style.display = 'none';
    }
  }
}
function handleSubmitFive(e){
  e.preventDefault();
  for (let i=0; i<3; i++){
    if (e.target[i].checked){
      let checkedValue = parseInt(e.target[i].value);
      myCreature.addFifthTrait(checkedValue);
      myCreature.renderCreature();
      myCreature.changeCreatureScore(checkedValue);
      currentChapterIndex++;
      chapterArray[currentChapterIndex].getNextPara();
      nextButtonElem.style.display = 'block';
      formFiveElem.style.display = 'none';
    }
  }
}
//Listen for submit on radio button forms.  then cycles through the index of the possible targets (the three options) and checks for truthyness on their checked trait.  Whichever one is true, will pass the index on to the addNthTrait method and then render the creature.




/* --------------------------------------------------------------------------------LISTENERS */
formOneElem.addEventListener('submit', handleSubmitOne);
formTwoElem.addEventListener('submit', handleSubmitTwo);
formThreeElem.addEventListener('submit', handleSubmitThree);
formFourElem.addEventListener('submit', handleSubmitFour);
formFiveElem.addEventListener('submit', handleSubmitFive);
//event listener for the submit on the first form




/* --------------------------------------------------------------------------------CALL FUNCTIONS */
