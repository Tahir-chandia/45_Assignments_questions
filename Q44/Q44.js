"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    console.log("Making a sandwich with the following items");
    items.map((things) => {
        console.log("-" + things);
    });
    console.log("Enjoy your sandwich");
}
// Call the function with different numbers of arguments
sandwich("Ham", "Cheese", "Lettuce", "Tomato");
sandwich("Peanut Butter", "Jelly", "Beans", "Pasta");
sandwich("Turkey", "Swiss", "Avocado");
// function makeSandwich(...items: string[]): void {
//     console.log("Making a sandwich with the following items:");
//     items.forEach(item => console.log("- " + item));
//     console.log("Enjoy your sandwich!");
// }
// // Call the function with different numbers of arguments
// makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
// makeSandwich("Peanut Butter", "Jelly");
// makeSandwich("Turkey", "Swiss", "Avocado");
