/* Fizz Buzz Conditionals Challenge
- create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5 */

/* for (var i=1; i <= 20; i++) {
    if (i % 15 == 0)
        console.log(“FizzBuzz”);
    else if (i % 3 == 0)
        console.log(“Fizz”);
    else if (i % 5 == 0)
        console.log(“Buzz”);
    else
        console.log(i);
} */

// Ternary
let FB = 15;

(FB % 3 == 0 && FB % 5 == 0) ? console.log("Fizz Buzz") 
    :(FB % 3 == 0) ? console.log("Fizz")
        :(FB % 5 == 0) ? console.log("Buzz")
            :console.log("Fizz Bust")

// Switch
let FB = 15;

switch (true) {
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log("Fizz Bust")
}

// If Else
let FB = 15
if (FB % 3 == 0 && FB % 5 == 0) {
    console.log("Fizz Buzz");
    } 
        else if (FB % 3 == 0) {
        console.log("Fizz");
    }
        else if (FB % 5 == 0) {
        console.log("Buzz");
    }
        else {
            console.log("Fizz Bust");
    }