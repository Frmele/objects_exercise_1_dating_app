'use strict';

/*Create two profile objects: your own profile and your dating match.
Add the properties: age (number), gender(string) with corresponding values.
Add another property object (nesting) called “preferences”.
Add the properties likeKids (boolean), and hobbies (array) to the preferences object.
Got stuck? Scroll down to the left hint.
Compare if you both like kids and print “You both like kids!” if that is the case.
Compare if you both have the same amount of preferences and print “You have the same amount of preferences!” if that is the case.
Got stuck? Scroll down to the right hint.*/

// Your code here

const profile1 = {
  age: 37,
  gender: "F",
  preferences: {
    likeKids: true,
    hobbies: ["Music", "Singing"]}
};

const profile2 = {
  age: 39,
  gender: "M",
  preferences: {
    likeKids: true,
    hobbies: ["Gardening", "Singing", "movies"]
    }
};


// Match based on liking children

const preferencesProfile1 = profile1.preferences.likeKids;
const matchedPrefProfile2 = profile2.preferences.likeKids;

console.log(preferencesProfile1);
console.log(matchedPrefProfile2);

if (preferencesProfile1 === matchedPrefProfile2)
{console.log("You both like kids!")}
else console.log("You have diffent prefecences about having kids.")

// Match based on same amount of preferences

const preferencesNumberProfile1 = (Object.keys(profile1.preferences)).length;
const matchedNumberPrefProfile2 = (Object.keys(profile2.preferences)).length;

console.log(preferencesNumberProfile1);
console.log(matchedNumberPrefProfile2);

if (preferencesNumberProfile1 === matchedNumberPrefProfile2)
{console.log("You have the same amount of preferences!")}
else console.log("You have diffent prefecences.")

// Grow bonus
const entries = Object.entries(profile2.preferences);

console.log("Your dating match info:")
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  if ( key === "preferences" ){
    const hobbies = value.hobbies.join(", ");
    console.log(`The hobbies are ${hobbies}`)
  } else {
    console.log(`The ${key} correspond to: ${value}`)
  }
}