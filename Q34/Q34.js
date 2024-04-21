"use strict";
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let fav_pizza = ["Extra cheeze", "Afghani tikka", "Malai tikka"];
// Print the name of each pizza using a for loop
for (let i = 0; i < fav_pizza.length; i++) {
    console.log(fav_pizza[i]);
}
// Modify the for loop to print a sentence about each pizza
console.log("\nStatements about each pizza:");
for (let i = 0; i < fav_pizza.length; i++) {
    console.log(`I like ${fav_pizza[i]} pizza.`);
}
// Add a statement about how much you like pizza
console.log("\nI really love pizza!");
