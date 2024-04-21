"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// const magicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];
// const great_magicians: string[] = make_great([...magicians]); // Making a copy of the original array
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// function make_great(magicians: string[]): string[] {
//     return magicians.map(magician => `the Great ${magician}`);
// }
// show_magicians(magicians); // Showing the original array
// show_magicians(great_magicians); // Showing the modified array
let magicians = ["Criss Angel", "David copperfield", "David blaine", "Harry Anderson"];
let great_magicians = [...magicians]; // Making a copy of an orignal array
function show_magicians(magician) {
    magician.forEach(magician => console.log(magician));
}
function make_great(magician) {
    return magician.map(magician => `the Great ${magician}`);
}
show_magicians(magicians); //Orignal Array
show_magicians(make_great(magicians)); //Modified Array 
