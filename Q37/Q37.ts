// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.



function make_shirt(size:string="Large",message:string="I love Typescript!"):void{
    console.log(`I make a ${size} T.shirt with the message of ${message}`);
}


make_shirt("Small","I am a Programmer!")
make_shirt("Medium")
make_shirt()