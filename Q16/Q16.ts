
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let friendsArr:string[] = ["Shayan","Talha","Zahid","Zeeshan"]
let canNotAttend:string = "Talha"
let newMember:string = "Sajjad"

friendsArr[friendsArr.indexOf(canNotAttend)] = newMember
// friends.map((items)=>{console.log(`Dear ${items},I found a bigger dinner table`)})
console.log(friendsArr);

let guestInBeginning:string = "Sahil"
friendsArr.unshift(guestInBeginning)
console.log(friendsArr);



let middleGuest:string= "Ahsan"
let middleInndex:number = friendsArr.length/2

friendsArr.splice(middleInndex,0,middleGuest)
console.log(friendsArr);

friendsArr.push("Zahid")
console.log(friendsArr);

friendsArr.map((items)=>{console.log(`Dear ${items}, you are cordinally invited to dinner `);
})
