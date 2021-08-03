'use strict';
function storyPreview() {
  let bodyElem = document.getElementById("bodyElem")
 let pElem = document.createElement("p");
 pElem.textContent = ` ChapterOne [Greetings!!! You’re entering in a restricted area.]
 Proceed...
 [In order for you to be granted access please provide the following information]
 •	NAME.
 •	BIRTHDAY
 •	LOCATION
 Once they provide the information, we will give them an alert with the following message.
 •	A Welcome greeting + username!!
 •	Find the Glowing EGG
 The moment the user picks the egg, the egg will vibrate as a result setting the alarm off. Then the egg will hatch, and an alien creature will pop out. 
 We will ask the user the following:
 Username + How do you want to proceed?
 We will give them 3 options:
 •	Scare the creature and go home. this will give them (negative point)
 •	Take the creature home with you. This will give them (positive point) 
 •	Leave the creature there while you go home. This will give them (zero point)
 ChapterTwo

 
 `;
 bodyElem.appendChild(pElem);

}
storyPreview()

