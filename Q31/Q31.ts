
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let usernames:string[] = [] // Array of users

// Check if the list of users is not empty
if(usernames.length===0){
    console.log("We need to find some users!");
}else{while(usernames.length< 0){
    usernames.pop()}}//remove last element of an Array

    
// Check again if the list of users is empty after removal
if(usernames.length===0){
    console.log("We need to find some users!");
}else{console.log("All the users has been removed.");
}
