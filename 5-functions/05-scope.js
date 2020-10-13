//Example 1
let x = 12; //Declare and initialize variable x, value of 12

function scope() {
    let x = 33; //Newly declared and initialized variable
    console.log(x);
}

scope();
console.log(x);

//Example 2
let y = 12;
function scope() {
    y = 33; //No "let"; reinitializing variable y, giving it a new value
    console.log(y);
}

scope();
console.log(y);

//VAR vs LET
// Var is scoped to the nearest function block; Let is scoped to nearest enclosing block

var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x)
    }
    console.log(x);
}

varTest()
console.log(x);

//

let x = 12;//Global scope
function letTest() { //Function block
    var x = 33;
    if (1 == 1) { //Enclosing block
        let x = 45;
        console.log(x)
    } //Enclosing block
    console.log(x)
} //Function block

letTest();
console.log(x);