"use strict";
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
let alien_color = 'green'; //if green 
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
alien_color = "yellow"; // if yellow
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
alien_color = "red"; //if red
if (alien_color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}
else {
    console.log("Unknown alien color. No points awarded.");
}
