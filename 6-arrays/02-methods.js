let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food);

food.splice(1, 1, 'Bananas');
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice2:', food);

// food.splice(0, 3, 'Turkey');
// console.log('splice3:', food);

food.pop();
console.log('pop:', food);

food.shift();
console.log('shift:', food);

food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);




let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

dogs.push('Great Dane');
dogs.unshift('Bull Terrier', 'Husky');

console.log(dogs); 




let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

// regular for loop
for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i])
}

// forEach()
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})

dogs.forEach((dog, index) => {
    console.log(dog)
    console.log(index)
})

/*
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
for (foodItem of food) {
    console.log(foodItem) // Pecan pie, Shrimp, Quesadilla, Cheese cake, Hotdog
}
food.push('Pizza'); // Appends Pizza to end of array
console.log('push:', food);

food.splice(1, 1, 'Bananas') // Removes Shrimp and adds Bananas => (position, how many to cut, what to add in that location)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie') //Adds Sweet Potato Pie in position 2 but doesn't remove anything
console.log('splice 2:', food);

food.pop(); // pop removes the last item of an array - so it should remove pizza
console.log('pop:', food);

food.shift(); // shift removes the first element in an array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); // unshift adds one or more elements to the beginning of the array
console.log('unshift:', food);
console.log(food)

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];
dogs.push('Great Dane');

dogs.unshift('Bull Terrier', 'Husky');
console.log(dogs);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

//* regular for loop
for (i = 0; i < dogs.length; i++) {
   console.log(dogs[i]);
}
//* forEach()

dogs.forEach(dog => console.log(dog))
dogs.forEach(function(dog) {
  console.log(dog)
})

dogs.forEach((dog, index) =>{
  console.log(dog)
  console.log(index)
})
*/

/* 
 - (Go look at MDN docs to remind you):
 - Create an array containing movies
 - Use .forEach() to list your movies
 - Add another movie at the end
- And replace one of your existing movies with another one
*/

let movies = ["Apollo 13", "Sleepless in Seattle", "When Harry Met Sally"]

movies.push("You've Got Mail");
console.log("push:", movies)

movies.splice(0, 1, "Saving Private Ryan")
console.log("splice:", movies)

movies.forEach(function(movie) {
    console.log(movie)
})

//

let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array ) { // if (arr instanceof Array === true) 
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else {
    console.log('not an array')
}

//* "" false   "string" true
//* 0 false    1 true

console.log(typeof 2001);
console.log(typeof "2001");

console.log(typeof true);
console.log(typeof "true");