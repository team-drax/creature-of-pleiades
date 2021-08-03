'use strict';
//---------------------------------------------GLOBAL VARIABLES
const pElem = document.getElementById('paragraph');
//gets the location of the paragraph element and assigns it to variable
const nextButtonElem = document.getElementById('next');
//gets the location of the next button element and assigns it to nextButtonElem
let currentChapterIndex = 0;
//assigns the current chapter to the index of 0 as a base point.  this will advance when we get to the last paragraph in the chapter per the
let chapterArray = [];
//creates an array that houses each instance of chapters made from the chapter constructor using the createAndPushChapters function



//---------------------------------------------CONSTRUCTOR FUNCTION
function Chapter(chaptername){
  this.chaptername = chaptername;
  this.paragraphIndex = 0;
  this.paragraphArray = [];
}
//creates a function that creates instances of Chapters, while taking in chaptername as a parameter



//---------------------------------------------CONSTRUCTOR METHODS
Chapter.prototype.addParagraph = function(text){
  this.paragraphArray.push(text);
};
//adds a text block to the paragraph array

Chapter.prototype.getNextPara = function(){
  let nextPara = this.paragraphArray[this.paragraphIndex];
  this.paragraphIndex++;
  pElem.innerHTML = nextPara;
};
//grabs the next paragraph from the Chapter using the Chapters paragraphIndex as reference for the paragraphArray, then increases the index by one

Chapter.prototype.isAtLastPara = function(){
  if (this.paragraphIndex == this.paragraphArray.length-1){
    return true;
  } else {
    return false;
  }
};
//checks if we are at the last paragraph of the chapter by checking if the Chapters paragraph index is equal to the length of the array.



//---------------------------------------------Global Functions
function createAndPushChapter(chaptername){
  let chapter = new Chapter(chaptername);
  chapterArray.push(chapter);
}
//creates 5 chapter objects and pushes them to the chapterArray






//---------------------------------------------listener events
function handleNext(e){
  if (chapterArray[currentChapterIndex].isAtLastPara()){
    chapterArray[currentChapterIndex].getNextPara();
    nextButtonElem.style.visibility = 'hidden';
    document.getElementById('testform').style.visibility = 'visible';
  }else{
    chapterArray[currentChapterIndex].getNextPara();
  }
}
//HANDLES THE FUNCTIONS OF GOING TO THE NEXT PARAGRAPH


//HANDLE THE FORM SUBMITTAL IN WHICH WE MOVE TO THE NEXT CHAPTER
// currentChapterIndex++;




//---------------------------------------------Listener
nextButtonElem.addEventListener('click', handleNext);
//listens for presses on the next button


//NEED A LISTENER FOR FORM SUBMITTAL



//---------------------------------------------Call Function
createAndPushChapter('chapter 1 - part 1');
createAndPushChapter('chapter 1 - part 2');
createAndPushChapter('chapter 1 - part 3');
createAndPushChapter('chapter 2 - the house');
createAndPushChapter('chapter 3 - the confrontation');
createAndPushChapter('chapter 4 - the villain');
createAndPushChapter('chapter 5 - the return home');
//creates and pushes the 5 chapters into the chapter array
chapterArray[0].addParagraph('nothing happened');
chapterArray[0].addParagraph('blah blah');
chapterArray[0].addParagraph('test Paragraph 3');
chapterArray[0].addParagraph('test paragraph 4');
chapterArray[0].addParagraph('test paragraph 5');
chapterArray[1].addParagraph('beginning of chapter 1 part 2');
