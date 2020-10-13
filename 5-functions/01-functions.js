// DECLARATIONS
function hi() {
    console.log('HI')
}

hi();


// EXPRESSIONS
let hello = function() {
    console.log("Hey!")
}

hello();


// FUNCTION EXAMPLES
function addIt() {
    console.log(5+10)
};

addIt()

function counting() {
    for (i = 1; i <=10; i++) {
        console.log(i)
    }
}

counting()


/* CHALLENGE
 - Given the array, create a function that lists out the values individually.
let arr = ['This', 'is', 'really', 'cool']; */

let arr = ['This', 'is', 'really', 'cool'];

function arrList() {
    for (item of arr) {
        console.log(item)
    }
}

arrList();

//From Quiz 3
function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());