// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


let favourite_fruits:string[] = ["Banana","Apple","Mango",]

if(favourite_fruits.includes("Apple")){
    console.log("You really like Apple!");   
}else{console.log("I don't like Apple");}

if(favourite_fruits.includes("Banana")){
    console.log("You really like Banana!");   
}else{console.log("I don't like Banana");}

if(favourite_fruits.includes("Mango")){
    console.log("You really like Mango!");   
}else{console.log("I don't like Mango");}

if(favourite_fruits.includes("Grapes")){
    console.log("You really like Grapes!");   
}else{console.log("I don't like Grapes!");}


if(favourite_fruits.includes("Orange")){
    console.log("You really like Orange!");   
}else{console.log("I don't like Orange!");}
