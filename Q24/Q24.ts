// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//1st test for equality and inequality
let age:number = 23
console.log(age ===23);
console.log(age !==23);

//2nd test for equality and inequality
let name1 :string = "Tahir"
console.log(name1 === "Tahir");
console.log(name1 !== "Tahir");

// • Tests using the lower case function
//1st test using the lower case function
let city :string = "KaRacHi"
console.log(city.toLowerCase()==="karachi");
console.log(city.toLowerCase()==="KarachI");

//2nd test using the lower case function
let country :string = "PakiStaN"
console.log(country.toLowerCase()==="pakistan");
console.log(country.toLowerCase()==="PakiStaN");

//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num:number = 4

console.log(num < 4);
console.log(num > 4);
console.log(num >= 4);
console.log(num <= 4);
console.log(num == 4);
console.log(num != 4);

// • Tests using "and" and "or" operators
let userName :string = "Tahir"
let password:number = 12345
console.log(userName == "Tahir" && password == 12345);
console.log(userName == "Tahir" && password == 23452);
console.log(userName == "Tahir" || password == 12345);
console.log(userName == "Tahir" || password == 234555);

// • Test whether an item is in a array && 
// • Test whether an item is not in a array

let gamesCompanies:string[] = ["Insomniac","Ubisoft","Rockstar","CD project red","Santa monica","Remedy Entertainment"]
console.log(gamesCompanies.includes("Ubisoft"));
console.log(gamesCompanies.includes("Activision"));
