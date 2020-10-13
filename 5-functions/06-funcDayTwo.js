// Make a function called greet 
function greet () {
    console.log("Hello");
}

// say hi
let say_hi = () => console.log("Hi");

// hello

let hello = () => {
    console.log("Hello");
}

// greetTwo
let greetTwo = function() {
    console.log("Greet again");
}

//
aList = ['Justin', 'Ahmann']

function printList() {
    console.log(aList)
}
printList()

function betterPrint(listParam) {
    console.log(listParam);
}
betterPrint(aList)

//
function printName(name) { //Whatever gets passed in (name) gets put in console.log(name)
    console.log(name);
}
// name = "Justin"
printName("Justin")
/*
function printName("Justin" {
    console.log("justin")
}
*/
printName("Adam")

// Write out how this works with 20
function varLoop(n) { 
    for(let i = 1; i<= n; i++) {
        console.log(i);
    }
}
/*
function varLoop(20) {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
*/
varLoop(20)

// Make a function that takes in 3 things and prints them on separate lines
//1
function multiPrint(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


//2
function listPrint(wordList) {
    /* for (word in wordList) {
        console.log(wordList[word]);
    } */
    for (word of wordList) {
        console.log(word)
    }
}
listPrint(["Justin", "Adam", "Amy", "Joe"])


