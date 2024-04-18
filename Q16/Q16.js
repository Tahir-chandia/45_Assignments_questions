"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let friends = ["Shayan", "Talha", "Zahid", "Zeeshan"];
let canNotAttend = "Talha";
let newMember = "Sajjad";
friends[friends.indexOf(canNotAttend)] = newMember;
// friends.map((items)=>{console.log(`Dear ${items},I found a bigger dinner table`)})
console.log(friends);
let guestInBeginning = "Sahil";
friends.unshift(guestInBeginning);
console.log(friends);
let middleGuest = "Ahsan";
let middleInndex = friends.length / 2;
friends.splice(middleInndex, 0, middleGuest);
console.log(friends);
friends.push("Zahid");
console.log(friends);
friends.map((items) => {
    console.log(`Dear ${items}, you are cordinally invited to dinner `);
});
