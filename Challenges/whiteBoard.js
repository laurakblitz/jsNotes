/* 1) Write a function that accepts two numbers as parameters. Add them together and see if the result is even. Print the number and whether it is even or odd to the console. */

function add (x, y) {
	let z = x+y;
	if (z % 2 === 0) {
	console.log(`${z} is even`)
} else {
    console.log(`${z} is odd`)
}

add (5,4);
add (8,8);




/* 2) Create a pets object. The object should contain the following properties: 
Animal - string
Name - string
Gender - string
Age - integer
Likes - array */

let pets = {
Animal: ‘dog’,
Name: ‘Fido’,
Gender: ‘male’,
Age: 8,
Likes: [‘treats’, ‘walks’, ‘pets’],
}




/* 3) Area of a trapezoid. Write a function that accepts the parameters b1, b2, h. Your function should console.log the area of a trapezoid. Hint: A = ½(b1 + b2)h */

function trapezoid(b1, b2, h) {
    console.log((b1 + b2) / 2 * h)
} 



// 4) Create a Monsters Object 
// the monsters object should contain three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean
// defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string

let monsters = {
    Ghost: {
       traits: ['spooky', 'transparent', 'ooooo'],
       size: 'Varying',
       description: 'Spooky guy that haunts you.',
       dangerous: false,
       defeatMethods: {
         exorcism: 'Use actual priest for best results.',
         holyWater: 'Super soaker is best.',
         salt: 'Season your ghost evenly.'
       }
   },
   Zombie: {
     traits: ['undead', 'slow', 'decaying'],
     size: 'Varies by corpse',
     description: 'A corpse that has come back to life hungry',
     dangerous: true,
     defeatMethods:{
       gun: "Double tap always",
       chainsaw: "Messy but effective"
     }
   },
   Vampire: {
     traits: ['undead', 'pale', 'fangs'],
     size: 'Human sized',
     description: 'A corpse that has come back to life thirsty',
     dangerous: true,
     defeatMethods:{
       stake: "Right through the heart",
       sunlight: "They do not like long walks on the beach",
       garlic: "Eat enough and humans will leave you alone too"
     }
   }
   }



/* 5) write a program that takes in a list of items, and sorts them into an object where they key is the first letter lowercase
and the objects values are arrays with the items in it.
["justin", "jack", "jill", "amy", "nick"]
would become:
let nameObj = {
    a:["amy"],
    j:["jack", "jill", "justin"],
    n:["nick"]
}
bonus points if the lists are in order */

/* ["apple", "orange", "peach", "pear"]

let fruitObj = {
    a: ["apple"],
    o: ["orange"],
    p: ["peach", "pear"]
}*/

let names = ["justin", "jack", "jill", "amy", "nick"]
let namesObj = {}
for (name of names) {
    let firstLetter = name[0].toLowerCase()
    if (namesObj[firstLetter]) {
        namesObj[firstLetter].push(name)
    } else {
        namesObj[firstLetter] = [name];
    }
    console.log(firstLetter)
}
console.log(namesObj)



/* 6) bronze: Write a program that checks a string and tells you whether it is a palindrome(the same backwards and forwards), ie "racecar" or "hannah" */
let checkStr = (str) => {
    let toCheck = str.split("")
    return toCheck.join() == toCheck.reverse().join()
}
console.log(checkStr("demo"),checkStr("racecar"))

/* silver: Write a program that takes in a number tells you whether it is a palindrome, the incoming type is a number.
ie 1001 or 12321 */
let checkNum = (num) => {
    let toCheck = String(num).split("")
    let result = toCheck.join() == toCheck.reverse().join()
    return result
}
console.log(checkNum(101), checkNum(1000))

/* gold: Write a program that given, two ranges of numbers return the largest palindrome number from it's multiples,
so in the case of 1..100 and 1..100, The largest palindrome number would be 9009
Hint: To multiply each number the first step would be to take the first number from the first range multiplied by every number in the second
1*1, 1*2, 1*3 ... and so on
What tool do you have that can do this? */

let results = []
for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
        let toCheck = String(x*y).split("")
        if (toCheck.join() == toCheck.reverse().join()) {
        console.log(x*y)
        results.push(x*y)
        }
        //console.log(x*y)
    }
}
let maxNum = results[0]
for (result of results) {
    if (result > maxNum) {
        maxNum = result
    }
}
console.log(maxNum)
console.log(results)