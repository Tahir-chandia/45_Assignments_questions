// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.



let magicians:string[] = ["Criss Angel","David copperfield","David blaine","Harry Anderson"]

function show_magicians(){
    console.log(magicians);    
}

function make_great(){
    for(let magician of magicians){
        console.log(`The Great ${magician}`);
        
    }
}

show_magicians()
make_great()
