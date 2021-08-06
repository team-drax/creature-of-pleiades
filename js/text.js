'use strict';
//---------------------------------------------GLOBAL VARIABLES
const pElem = document.getElementById('paragraph');
//gets the location of the paragraph element and assigns it to variable
const nextButtonElem = document.getElementById('next');
//gets the location of the next button element and assigns it to nextButtonElem
const storyArticleElem = document.getElementById('story');
//variable for the location of the article.  used in appending forms.
let currentChapterIndex = 0;
//assigns the current chapter to the index of 0 as a base point.  this will advance when we get to the last paragraph in the chapter per the
let chapterArray = [];
//creates an array that houses each instance of chapters made from the chapter constructor using the createAndPushChapters function





//---------------------------------------------CONSTRUCTOR FUNCTION
function Chapter(chaptername, chaptertitle, backgroundimage){
  this.chaptername = chaptername;
  this.chaptertitle = chaptertitle;
  this.backgroundimage = backgroundimage;
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
  if (this.paragraphIndex == this.paragraphArray.length-1 || this.paragraphArray.length == 1){
    return true;
  } else {
    return false;
  }
};
//checks if we are at the last paragraph of the chapter by checking if the Chapters paragraph index is equal to the length of the array.
Chapter.prototype.pullChapterData = function() {
  let h2Elem = document.getElementById('chapterNumber');
  let chapterName = this.chaptername;
  h2Elem.innerHTML = chapterName;

  let h3Elem = document.getElementById('chapterTitle');
  let chapterTitle = this.chaptertitle;
  h3Elem.innerHTML = chapterTitle;

  let mainElem = document.getElementById('gamebackground');
  let chapterImage = this.backgroundimage;
  mainElem.style.backgroundImage = chapterImage;
}




//---------------------------------------------Global Functions
function createAndPushChapter(chaptername, chaptertitle, backgroundimage){
  let chapter = new Chapter(chaptername, chaptertitle, backgroundimage);
  chapterArray.push(chapter);
  return chapter;
}
//creates 5 chapter objects and pushes them to the chapterArray




//---------------------------------------------listener events
function handleNext(e){
  if (chapterArray[currentChapterIndex].isAtLastPara()){
    chapterArray[currentChapterIndex].getNextPara();
    nextButtonElem.style.display = 'none';
    formArray[currentChapterIndex].style.display = 'flex';
  }else{
    chapterArray[currentChapterIndex].getNextPara();
  }
}
//HANDLES THE FUNCTIONS OF GOING TO THE NEXT PARAGRAPH




//---------------------------------------------Listener
nextButtonElem.addEventListener('click', handleNext);
//listens for presses on the next button




//---------------------------------------------Call Functions
function renderChapters() {
  let firstChapter = createAndPushChapter('Chapter 1', 'The Lab', 'url(../img/background/thelabbg.png)');
  chapterArray[0].addParagraph(`You sit at your desk, looking over a beautiful ${userInfo[1]} sunset, working on your latest research in genetics.  Everyone else in the office has gone home at this point.  You check the clock and realize it is 11:00PM and you must have lost track of time!  While getting up to call it a night, you notice something odd out of the corner of your eye...  The gap under the door of your boss, Tamira\'s office is radiating a blue glow.  It is time to investigate...`)
  chapterArray[0].addParagraph('Opening Tamira\'s door, you see a box shaking around on her desk and it is the source of the blue light.  Should you really be in here, snooping around your bosses office?  After some hesitation, you decide you cant resist the urge to look.');
  chapterArray[0].addParagraph('As you approach the box, the glowing becomes brighter and brighter, and begins to make a buzzing sound.  You look inside and see an egg.  It isn\'t a normal egg... it is the size of a football and the source of the blue light.  It is vibrating wildly.  You touch the egg and the vibrating slows and the egg begins to hatch...');
  chapterArray[0].addParagraph('Watching the egg hatch, your heart begins to race.  What could possibly hatch out of a blue glowing egg?  You aren\'t sure if you want to know, but it is impossible to look away now.');
  chapterArray[0].addParagraph('The egg hatches and out comes a... creature.  It lacks features, and is mostly just a blob with a face.  It lunges out of the box and clings to the wall like one of those quarter machine sticky hand prizes.  It rolls down the wall, and starts walking its way towards you.');
  chapterArray[0].addParagraph('You have a choice... Do you try to scare it away?  You don\'t know what this strange creature can do... Maybe you should just leave the office and pretend like you never saw this creature or its egg... wipe your hands clean.  It does look a little cute though... ');
  
  let secondChapter = createAndPushChapter('Chapter 2', 'Home', 'url(../img/background/homebg.png)');
  chapterArray[1].addParagraph('Before you have time to do anything, the creature contorts its body like it\'s made of clay and vanishes from sight, and moments later reappears next to your shoulder bag.  You run to grab your bag but the creature hops inside and the zipper seals itself. ');
  chapterArray[1].addParagraph('You try to pry it out, but it has shut the zipper and locked your bag shut with some sort of magical power.  You rip at the zipper but it will not budge.  With your bag in hand, you run out of the office and out the door of your building and head back home.');
  chapterArray[1].addParagraph('When you get home, you throw the bag on the kitchen floor.  The zipper slowly opens by itself and the creature flops out of your bag... but it\s body is much larger than the inside of your bag.  How is this possible?  It stares you straight in the eyes.  It begins to let out a banshee-like shriek, and lays on its side.  It is more annoying than threatening, but what does it need?');
  chapterArray[1].addParagraph('It occurs to you... maybe it\'s hungry!  After all, it did just hatch from an egg, and hasn\'t had a meal.  You definitely don\'t want it to get any bad ideas and think of you as food, so maybe it\'s best to offer it something.');
  chapterArray[1].addParagraph('What would be best for this creature? Maybe it needs protein... you open your fridge and you have a pack of hotdogs, and some leftover vegetarian stir fry.  Maybe it doesn\'t eat any of those things though... Your garbage can is overflowing... you could just let it go to town on your trash.');
  
  let thirdChapter = createAndPushChapter('Chapter 3', 'The Text Message', 'url(../img/background/textmessagebg.png)');
  chapterArray[2].addParagraph('Offering this creature food has instantaneously shut it up.  It swallows its meal whole and in the next breath it vanishes and appears as it did before in the lab.');
  chapterArray[2].addParagraph('There is a crash in your living room and you rush in to find that the creature has shoved all the books off your bookshelf and squeezed its body into the top shelf.  It\'s skin looks different now, and it has fallen asleep.');
  chapterArray[2].addParagraph(`What do you do with this creature, ${userInfo[0]}?  Surely, you can\'t keep it forever.  What will Tamira say when she finds out you hatched her creature in her office?  What was she even doing with the egg and where did it come from?  So many questions are racing through your mind, but the creature doesn\'t seem to be doing anymore damage right now.  Maybe you should let it sleep and try to do the same.`);
  chapterArray[2].addParagraph(`You wake early and with a start!  The creature is lying at the foot of your bed watching you with it\'s beady gaze once again.  You look at your phone and Tamira has texted you. "${userInfo[0]}!! Were you at work late last night?!"`);
  chapterArray[2].addParagraph('Can you trust her?  Will she be upset that you stole her weird creature?  It did hop into your bag and seal it shut so it isn\'t really your fault.  Does she even know about the egg or did that egg appear in her office out of nowhere?  Maybe she has an explanation for all of this.');
  
  let fourthChapter = createAndPushChapter('Chapter 4', 'The Strangers', 'url(../img/background/strangersbg.png)');
  chapterArray[3].addParagraph('Your phone vanishes out of your hand before you have time to make your decision. You look up at the creature and it has changed form again. All of this is so strange.  You can no longer contact anyone, and you decide you cannot go into work and face Tamira.');
  chapterArray[3].addParagraph('You pace around the house and try to take your mind of things.  click, click, click... the creature is on top of your laptop, clicking buttons and rolling across the keyboard.  Shooing it away, a local news site has been pulled up.  Headlines today are about unexpected meteor showers from everywhere around the globe, and that the government is mobilizing the National Guard in all 50 states.');
  chapterArray[3].addParagraph('At that moment, there is a banging on your front door!  You sneak a look out the side kitchen window and see a mysterious unmarked black van and two men in suits..  You hide upstairs, and think about what you are going to do next.');
  chapterArray[3].addParagraph('The creature is growing agitated, and panicked.  It looks like it\'s motioning towards the window like you need to escape quickly.  How did you get caught up in this alien conspiracy?');
  chapterArray[3].addParagraph('You weigh your options.  You could answer the door and hand this creature over.  Presumably, that is why they are here banging on your door.  Alternatively, you could hop out the window with the creature, but you are on the second floor or you could try to sneak out the back door risking being seen.');
  
  let fifthChapter = createAndPushChapter('Chapter 5', 'The Escape', 'url(../img/background/escapebg.png)');
  chapterArray[4].addParagraph(`CRASH!  You don\'t have time to decide. The two men are yelling through the house.  They have smashed through the window and are rushing up to you.  \'WE KNOW WHAT YOU HAVE ${userInfo[0]}!\' They shout, and you can hear them rushing up the stairs.  You turn towards the creature and it has changed form once again.  Instinctively, you hop on its back and proceed out the window.`);
  chapterArray[4].addParagraph('What are you doing?  This creature needs to be brought back to where it came from, but where is that exactly?  At the same time, you feel a bond growing between you and it.  It could have left without you... it has the ability to disappear! It must have chosen to wait for you.  Where are you two going though?  You can\'t go into hiding with a strange creature.');
  chapterArray[4].addParagraph('Up in the sky in the distance is a floating triangular black shape.  It definitely isn\'t a plane.  It is shiny, huge and moving slowly. Is this where the creature came from?  Why is he taking you in the opposite direction towards the woods?  Maybe he doesn\'t see the floating triangle.  You are at the edge of the woods now, and the creature has stopped.  You hop off its back and it turns back towards you.  You try asking it where it came from, you point out the triangle in the sky, you are just looking for any lead!  \"WHAT DO YOU WANT?\" you beg... The creature gazes at you, and your mind stops racing.  Miraculously, you find a sense of calm, and coming from within your head, you hear the word \"HOME.\"');
  chapterArray[4].addParagraph('It talked to you.  Maybe not verbally, but it communicated telepathically.  \"You want to go home?\" you ask.  The creature nods.  \"Where is that?  Please, just tell me.  I can take you there.\"  No response.');
  chapterArray[4].addParagraph('Where do you take the creature?  You could bring it back to the lab with your boss who may have more information.  You could bring it to the black triangle in the sky since it is your only strong lead on where home could be for this creature.  You have a strong gut feeling about going into the forest where you can safely hide, but why would the creature stop at the forest edge instead of going straight in?');
  
  let resoulutionChapterWorst = createAndPushChapter('The End', 'Oh No!', 'url(../img/paper.jpeg)');
  chapterArray[5].addParagraph('You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and there are no more leads.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?  Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.');
  chapterArray[5].addParagraph('The creature starts writhing and twitching and you back away...its eyes go bloodshot red and start bulging from its head.  It starts making an awful sound... a high pitched screeching and it beings foaming at the mouth.  In the distance, the sky becomes littered with black triangle spaceships and realization hits you.  The invasion has begun... The spaceships have lazers and are burning everything in sight.  Do you run?  Do you hide?  There is no escape for you or the rest of humanity.  ');
  chapterArray[5].addParagraph('The creature gives you a dark look... It grows tentacle after tentacle... and with no time to react it lunges forward and pins you to the ground.  It wraps your body with its tentacled body and winds its wet tongue around your head.  You are devoured whole and the world goes black....');
  chapterArray[5].addParagraph('THE WORLD HAS BEEN DESTROYED AND YOU LOSE EVERYTHING!!!')
  
  let resolutionChapterNegative = createAndPushChapter('The End', 'It was a mistake...', 'url(../img/paper.jpeg)');
  chapterArray[6].addParagraph('You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and you have no more leads.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?  Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.');
  chapterArray[6].addParagraph('The creature starts writhing and twitching and you back away...its eyes go bloodshot red and start bulging from its head.  It starts making an awful sound... a high pitched screeching and it beings foaming at the mouth.  It gives you a dark look.. and with no time to react it lunges forward and pins you to the ground.  You cannot escape... it devours you whole and the world goes black....');
  chapterArray[6].addParagraph('YOU LOSE');
  
  let resolutionChapterNeutral = createAndPushChapter('The End', 'Was it all real?', 'url(../img/paper.jpeg)');
  chapterArray[7].addParagraph('You have done everything you think you can to protect this creature.  You have gone down this insane path to bring the creature back home.  You notice just how still the night is...  It is dark.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?');
  chapterArray[7].addParagraph('There is a FLASH and a CRACK and you are back home waking with start!  You had a crazy dream of evolving creatures and some otherworldly conspiracy but all of the details are hazy now.  In your living room all your books are on the floor and the top shelf of the bookcase is empty.  This seems familiar... but you can\'t quite remember why.  You pick up the books and continue about your day');
  chapterArray[7].addParagraph('THE END');
  
  
  let resolutionChapterPositive = createAndPushChapter('The End', 'Bringing the creature home', 'url(../img/paper.jpeg)');
  chapterArray[8].addParagraph('You have done everything you think you can to protect this creature.  You have gone down this insane path to bring the creature back home.  You notice just how still the night is...  It is dark.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?');
  chapterArray[8].addParagraph('Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.  There is a FLASH and a CRACK and all of a sudden you are inside of a foreign looking vessel of some kind.  The walls are lined with glowing veins resembling the glow from your creature.  Are you inside the black triangle spaceship?  How did you get here?');
  chapterArray[8].addParagraph('Appearing out of nowhere, a creature resembling yours but much much larger approaches you and stares at you intensely.  The memories of your adventure with the creature flash through your mind like a movie in fast forward.  It looks at you, and with a last understanding glance, heads toward his family.  The elder thanks you for protecting one of his kind.  Then another FLASH and CRACK you are back at home, and all is calm.. no broken window, no black van, no triangle in the sky.  You don\'t even have the message from your boss.');
  chapterArray[8].addParagraph('CONGRATULATIONS!  YOU WIN!')
  
  let resolutionChapterBest = createAndPushChapter('The End', 'Into the forest', 'url(../img/paper.jpeg)');
  chapterArray[9].addParagraph('Trusting yours and the monster\'s insticts, you head away from the spaceship and into the forest.  You aren\'t sure why, but the creature doesn\'t seem to want to go to the spaceship, and taking it back to the lab means potentially putting it in harms way.  The agents in the black van have some agenda with this creature, and they would most certainly be able to track it back to the lab.');
  chapterArray[9].addParagraph('You push deper and deeper into the forest. You aren\'t sure this is the right choice, but the connection with your strangely developing friend pushes you further forward.  You have arrived at your destination, and there is nothing here... It is late now.  You commited to coming to this spot, trusting the creature and yourself, but you stand in the dark  with no more leads and the men in the suits could be arriving any moment on your trail.  You are standing at forest clearing) and nothing seems to be happening.');
  chapterArray[9].addParagraph('All of a sudden, the trees start pulsating with a glowing aura... and through the darkness, appearing from nowhere an entire group of creatures identical to your friend, but much, much larger!  Maybe the creature wasn\'t an alien creature, but actually from earth all along, hidden in the forest.  Just then, the creature begins radiating with this same glow and develops his last limbs.');
  chapterArray[9].addParagraph('The adults approach you slowly and gently.  They stare at you with intense contemplation, almost as if they are reading your mind.  All of your recent events with your creature start flashing through your mind like a movie in fast forward,  and you know they are learning of your journey through some sort of telepathy.  Then, the eldest of the group of creatures starts speaking to you through your mind.  It thanks you for protecting the creature and says it is time for them to take leave with your friend but before leaving, they want to give you a gift!');
  chapterArray[9].addParagraph('The elder reaches out a hand, and in it is a simple acorn.  When you touch the acorn, a huge WHOOSH of leaves and wind raise you into the air and then you lower to the ground.  You have been given the power of the creatures - the power to appear and dissapear at will.  This must be how they can live in the forest without being seen.  Your creature friend runs over and nuzzles against you, and after one last understood glance, it runs towards its family.  They thank you one last time, and vanish into the trees.');
  chapterArray[9].addParagraph('When you leave the forest, the black triangle is gone.  You head back home, knowing if there is any trouble you can disappear anyway.  When you get home, you are shocked to find there is no black van, the window isn\'t smashed in, and everything is calm and fine.  Your phone is sitting on your bed, and you don\'t even have any messages from Tamira.  You sigh and lay down and fall asleep..');
  chapterArray[9].addParagraph('CONGRATULATIONS!  YOU HAVE MADE GREAT DECISIONS AND RETURNED YOUR CREATURE SAFELY TO ITS HOME!  YOU WIN!');
  console.log(chapterArray);
}
