const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!")

// checking for other conditions 
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {  // gets evaluated because condition is true
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Logical Operators

const isCitizen = true;
const age = 26; // 

//isCitizen and age has to be both true in order for the code block to run
// AND Operator &&
if (isCitizen && age > 18) { 
  console.log("You are eligible to vote.");
}

// OR operator ||

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
// ! inverts the value for example !raining is now === true 
if (!raining) {
  console.log("Leave your umbrella at home!");
}