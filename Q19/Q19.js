"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let friendsArr = ["Shayan", "Talha", "Zahid", "Zeeshan"];
let guestInBeginning = "Sahil";
friendsArr.unshift(guestInBeginning);
let middleGuest = "Ahsan";
let middleInndex = friendsArr.length / 2;
friendsArr.splice(middleInndex, 0, middleGuest);
friendsArr.push("Zahid");
console.log(friendsArr.length);
