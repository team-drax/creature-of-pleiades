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
createAndPushChapter('chapter 2 - part 1');
createAndPushChapter('chapter 2 - part 2');
createAndPushChapter('chapter 2 - part 3');
createAndPushChapter('chapter 3 - part 1');
createAndPushChapter('chapter 3 - part 2');
createAndPushChapter('chapter 3 - part 3');
createAndPushChapter('chapter 4 - part 1');
createAndPushChapter('chapter 4 - part 2');
createAndPushChapter('chapter 4 - part 3');
createAndPushChapter('chapter 5 - the return home');
//creates and pushes the 5 chapters into the chapter array
chapterArray[0].addParagraph('You’re entering in a restricted area. Find the Glowing EGG');
chapterArray[0].addParagraph('As the user picks the egg, the egg will vibrate as a result setting the alarm off. Then the egg will hatch, and the creature will pop out.');
chapterArray[0].addParagraph(' How do you want to proceed?');
chapterArray[0].addParagraph('Scare the creature and go home.');
chapterArray[0].addParagraph('Take the creature home with you.');
chapterArray[0].addParagraph('Leave the creature in the lap while you go home.');
chapterArray[1].addParagraph('beginning of chapter 1 part 2');
chapterArray[2].addParagraph('beginning of chapter 1 part 3');
chapterArray[3].addParagraph(`Upon finding the creature at work, the user has returned home from work, with
the creature in hand, or finds it there after 7 seconds`);
chapterArray[3].addParagraph(`User gets home from work, nervous and confused as to what to do with the
creature.`);
chapterArray[3].addParagraph('User decides, rationally, that feeding the creature is step #1');
chapterArray[3].addParagraph(`User is directed to click on the food option of choice that they want to feed the
creature. Meat, garbage, vegetables. User clicks the option they want and the
first transformation of the creature begins.`);
chapterArray[3].addParagraph(`should I share the knowledge of the creature's existence`);
chapterArray[3].addParagraph(`The user receives a notification on their tablet/phone from a co-worker
asking “where is the egg?`);
chapterArray[3].addParagraph(`User is scared and does not know whether their co-worker is genuinely
interested or against them.`);
chapterArray[3].addParagraph('User is given the option to tell the truth, ignore the notification or lie.');
chapterArray[3].addParagraph(`Regardless of user decision, there is a shift in the universe as unexpected
meteor showers arise that appear to be linked to this creature’s
existence/escape.`);
chapterArray[4].addParagraph(`“Wow! What a day! Not only was I late for work again, I discovered this
creature that’s as ugly as the Chupacabra!” | “Surely someone saw me
take it from the lab, but I feel bad that this... thing was growing in our lab
without my knowledge. What is it? A government experiment? An
experiment by my lab-mate?`);
chapterArray[4].addParagraph(`“Why did I do this? Maybe I should let it go? No! I live in a neighborhood
with kids and elderly folk. Should I stuff it in the dumpster? Maybe..”
○ “Who am I kidding? This thing, whatever it is, is a living lifeform of
unexplained origin. I think I’ll try to keep it alive and maybe uncover what’s
going on here.”`);
chapterArray[4].addParagraph(`“What would I want if I was found in a strange place? Food!” | Let’s see
  what I’ve got for this thing. Meat? I mean it is a baby. Garbage? I mean,
  why not? But it’s a baby.. Vegetables? The foundation of health..but it’s a
  baby..”`);
chapterArray[4].addParagraph(`“Good, I’m glad it’s got some food in it. | You know what? Instead of
  seeing it, as an object, why don’t I assign a name to this little thing :) I’m
  going to name it...”`);
chapterArray[4].addParagraph(`what are we going to do about you?
 “I wonder, should I alert anyone of the knowledge of this creature's
existence? Well, on one hand, I did technically steal it from the lab. So, that may not go over well.” `);
chapterArray[4].addParagraph(`“But, I don’t think I could keep this a secret for too long nor can I see myself actually nurturing'`);
chapterArray[4].addParagraph(`“I can do it. It’s my responsibility now to care for (creatureName) and
ultimately make a decision.`);
chapterArray[4].addParagraph(`“Hey buddy!! there was an egg in a crate in our lab, did you
happen to see what happened to it? Let me know.”  Tell the truth or Lie`);
chapterArray[4].addParagraph(`Regardless of user decision, there is a shift in the universe as unexpected
  meteor showers arise that appear to be linked to this creature’s
  existence/escape.`);
chapterArray[5].addParagraph(`“Wow! What a day! Not only was I late for work again, I saw this, this,
  creature that’s as ugly as the Chupacabra!” || “I wonder what that thing
  was? “And how did I not notice this... thing, was growing in our lab without
  my knowledge? Is it a government experiment? An experiment by my
  lab-mate`);
chapterArray[5].addParagraph('creature enters the house and scares the user');
chapterArray[5].addParagraph('“What the!? How? How did, this, thing follow me home!? Aye Dios Mio!”');
chapterArray[5].addParagraph(`“This thing, whatever it is, is a living lifeform of unexplained origin. It
doesn’t look that scary, so I think I’ll try to keep it alive and maybe uncover what’s going on here.”`);
chapterArray[5].addParagraph(`“Now… what would I want if I was found in a strange place? Food!” | Let’s
see what I’ve got for this thing. Meat? I mean it is a baby. Garbage? I
mean, why not? But it’s a baby.. Vegetables? The foundation of health..but it’s a baby..”`);
chapterArray[5].addParagraph(`“Good, I’m glad it’s got some food in it. | You know what? Instead of
seeing it, as an object, why don’t I assign a name to this little thing :) I’m
going to name it...”`);
chapterArray[5].addParagraph('what are we going to do about you?');
chapterArray[5].addParagraph(`'“I wonder, should I alert anyone of the knowledge of (creatureName)’s
existence? I mean, I decided I didn’t want anything to do with it. But look
at it, it’s so...cute! He even has little hairs.”`);
chapterArray[5].addParagraph(`It’s my responsibility now to care for (creatureName) and
ultimately make a decision.`);
chapterArray[5].addParagraph('notification on phone/tablet/laptop');
chapterArray[5].addParagraph(`“Hey!!, there was an egg in a crate in our lab, did you
happen to see what happened to it? Let me know.”`);
chapterArray[5].addParagraph('Tell the truth or Lie');
chapterArray[5].addParagraph(`“Hey Ralph, I noticed that the crate was cracked open and when I
opened it up, the egg cracked open and a creature popped out! I
decided that it would be best to bring it home.”`);
chapterArray[5].addParagraph('“Ralph, I am not sure what you’re talking about, sorry.”');
chapterArray[5].addParagraph(`Regardless of user decision, there is a shift in the universe as unexpected
meteor showers arise that appear to be linked to this creature’s
existence/escape.`);
chapterArray[5].addParagraph(`meteor showers, screen shakes? Animation that
shows meteors flying across screen or lines glowing'`);
chapterArray[6].addParagraph('Leading into the Army Response/government response');
chapterArray[6].addParagraph(`You've seen the news, the meteor showers. The local news is calling it a potential extinction event, but no one really knows. The news continues to report that the government is mobilizing the national guard in all 50 states.`);
chapterArray[6].addParagraph('You approach the door and open it to find two men in suits. You quickly assertain that they are government employees. They know you were at **insert lab name** and ask about your whereabouts last night and your actions. They inform you that some security protocols were violated and they are tracking it down. They are quite vague. ***I think we could insert a choice here and I think one of them should be to lie, but if you do, then maybe the two men present your badge and call you out for lying');
chapterArray[6].addParagraph('You come up with an explanation, but there is banging behind you in the house');
chapterArray[6].addParagraph('The two men ask what that is and you make up something*** we can talk about this');
chapterArray[6].addParagraph(`The two men hand you a business card and tell you to call them with any information that you think of. You ask for some credentials as they turn away and they act as though they didn't hear you and keep walking.`);
chapterArray[6].addParagraph('Moments later you get a text from a friend from work. They ask where you are and if you can meet up.');
chapterArray[6].addParagraph(`You say you cannot and they respond quickly that it is urgent ***maybe we have like a cell phone/text message overlay/image showing the conversation`);
chapterArray[6].addParagraph(`You see a flash of bright light outside the window and go outside to see. A massive meteor is heading this way.  the creature is going crazy in the house. Banging in the basement continues. You go down to find the creature *evolving*? Screaming? ** the meteors are the creature's "people" and it is causing him to call out/go crazy** give the user a choice here?*** hide upstairs, open the basement door access to outside, try to calm the creature`);
chapterArray[6].addParagraph('The creature gets out.');
chapterArray[6].addParagraph('As you watch/chase(depending on choices) the creature outside, you are in awe of a giant ship. The ship sits over the town and waits. The creature moves in the direction of the ship.');
chapterArray[6].addParagraph('beginning of chapter 3 part 2');
chapterArray[6].addParagraph('beginning of chapter 3 part 2');
chapterArray[6].addParagraph('beginning of chapter 3 part 3');
chapterArray[6].addParagraph('beginning of chapter 3 part 3');
chapterArray[9].addParagraph(`Trusting (monster name's) insticts you head away from the spaceship.  You aren't sure why, but the creature doesn't seem to want to go to the spaceship, and taking it back to the lab means potentially putting it in harms way.  The (villain agency) has some agenda with this creature, and they would most certainly be able to track it back to the lab.`);
chapterArray[9].addParagraph(`As you get closer and closer to the forest the monster begins growing once again.  He starts developing limbs.  You aren't sure this is the right choice, but the connection with your strangely developing friend pushes you further forward.  You have arrived at your destination, and there is nothing here... It is late now.  You commited to coming to this spot, trusting the creature, but you stand in the dark  with no more leads and the (villain agency) could be arriving any moment on your trail.  You are standing at forest clearing) and nothing seems to be happening.`);
chapterArray[9].addParagraph(`All of a sudden, the trees start pulsating with a glowing aura... and through the darkness, appearing from seemingly nowhere an entire group of creatures identical to your friend, but much, much larger!  Maybe the creature wasn't an alien creature, but actually from earth all along, hidden in the forest.  Just then, (creature name) begins radiating with this same glow and develops his last limbs.`);
chapterArray[9].addParagraph('The adults approach you slowly and gently.  They stare at you with intense contemplation, almost as if they are reading your mind.  All of your recent events with your creature start flashing through your mind like a movie in fast forward,  and you know they are learning of your journey through some sort of telepathy.  ');
chapterArray[9].addParagraph(`Then, the eldest of the group of creatures starts speaking to you through your mind.  It thanks you for protecting the creature and says it is time for them to take leave with your friend but before leaving, they want to give you a gift!  The elder reaches out a hand, and in it is a simple acorn.  When you touch the acorn, a huge WHOOSH of leaves and wind raise you into the air and then you lower to the ground.`);
chapterArray[9].addParagraph('You have been given the power of the creatures - the power to appear and dissapear at will.  This must be how they can live in the forest without being seen.  (creature name) runs over and nuzzles against you, and after one last understood glance, it runs towards its family.  They thank you one last time, and vanish into the trees.');
chapterArray[10].addParagraph('You have done everything you think you can to protect this creature.  You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and there are no more leads.');
chapterArray[10].addParagraph('A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here? ');
chapterArray[10].addParagraph('Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.  There is a FLASH and a CRACK and you are all of a sudden standing inside of a foreign looking vessel of some kind.  The walls are lined with glowing veins resembling the glow from your creature.  Are you inside the spaceship?  How did you get here?  ');
chapterArray[10].addParagraph('Appearing out of nowhere, a creature resembling yours but much much larger approaches you and stares at you intensely.  The memories of your adventure with (creature name) flash through your mind like a movie in fast forward.  (creature name) looks at you, and with a last understanding glance, heads toward his family.  The elder thanks you for protecting one of his kind.  Then another FLASH and CRACK you are back at home, and all is calm.  ');
chapterArray[11].addParagraph('You have done everything you think you can to protect this creature.  You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and there are no more leads.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?  Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.');
chapterArray[11].addParagraph(`There is a FLASH and a CRACK and you are back home waking with start!  You had a crazy dream of evolving creatures and some otherworldly conspiracy but all of the details are hazy now.  You head to the kitchen to make yourself breakfast, and on the floor are scraps of (meat, veggies or garbage).  This seems familiar... but you can't quite remember why.`);
chapterArray[12].addParagraph('You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and there are no more leads.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?  Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.');
chapterArray[12].addParagraph('(creature name) starts writhing and twitching and you back away...its eyes go bloodshot red and start bulging from its head.  It starts making an awful sound... a high pitched screeching and it beings foaming at the mouth.  It gives you a dark look.. and with no time to react it lunges forward and pins you to the ground.  You cannot escape... it devours you whole and the world goes black....');
chapterArray[12].addParagraph('You have gone down this insane path to bring the creature back home.  Your adventure has brought you here, but then you notice just how still the night is...  It is dark, and there are no more leads.  A moment of panic hits you, as your realize you may have made the wrong choice... Why are you here?  Just then, the ground begins to shake and your creature starts pulsating with an otherworldly glow.');
chapterArray[12].addParagraph('(creature name) starts writhing and twitching and you back away...its eyes go bloodshot red and start bulging from its head.  It starts making an awful sound... a high pitched screeching and it beings foaming at the mouth.  In the distance, the sky becomes littered with spaceships and realization hits you.  The invasion has begun... The spaceships have lazers and are burning everything in sight.  Do you run?  Do you hide?  There is no escape for you or the rest of humanity.  ');
chapterArray[12].addParagraph('The creature gives you a dark look... It grows tentacle after tentacle... and with no time to react it lunges forward and pins you to the ground.  It wraps your body with its tentacled body and winds its wet tongue around your head.  You are devoured whole and the world goes black....');
chapterArray[12].addParagraph('beginning of chapter 1 part 3');
