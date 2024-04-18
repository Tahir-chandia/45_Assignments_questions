// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

let friendsArr:string[] = ["Shayan","Talha","Zahid","Zeeshan"]
let guestInBeginning:string = "Sahil"
friendsArr.unshift(guestInBeginning)
let middleGuest:string= "Ahsan"
let middleInndex:number = friendsArr.length/2
friendsArr.splice(middleInndex,0,middleGuest)
friendsArr.push("Zahid")

console.log(friendsArr.length);
