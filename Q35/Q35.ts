// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

let animal:string[]=["Cat","Parrot","Dog"]

//print the name of each animal using a for loop
for(let i =0;i<animal.length;i++){
    console.log(animal[i]);   
}



//print the statement about animal using a for loop
console.log("\nStatements about each animal:");
for(let i =0;i<animal.length;i++){
    console.log(`A ${animal[i]} would make a great pet.`);    
}

console.log("\nAll of these animals would make great pets!");
