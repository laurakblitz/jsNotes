function hi(name) {
    console.log(`Hi ${name}`)
}

hi("Keagan");
hi("Justin");
hi("Ro");


function addIt(x, y) {
    console.log(x+y);
};

addIt(2, 9);
addIt(8, 15);
addIt(7, 4);


/* CHALLENGE
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function addName(firstName, lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}`);
}

addName("Laura", "Blitz");

// Correct Version
function myName(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}.`)
}

myName('Laura', 'Blitz');