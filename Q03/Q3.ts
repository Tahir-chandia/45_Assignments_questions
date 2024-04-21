// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



let firstName:string ="muhammad tahiR"
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
console.log(firstName.charAt(0).toUpperCase()+ firstName.slice(1,8).toLowerCase() +" "+ 
firstName.charAt(9).toUpperCase() + firstName.slice(10,14).toLowerCase());


