/* Challenge:
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with a space between variables).
End Result:
Danielle Geiser, 12175 Visionary Way, Fishers, IN 46038 */

let firstName = 'Laura';
let lastName = 'Blitz';
let houseNumber = '1136';
let street = 'Falcon Ridge';
let city = 'Indianapolis';
let state = 'Indiana';
let zipCode = '46280';
console.log(firstName + " " + lastName + "," + " " + houseNumber + " " + street + "," + " " + city + "," + " " + state + " " + zipCode);
console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipCode}`);
let address = `${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
console.log(address);




/* Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
let sent = 'This sentence will be split into individual parts '; */

let sent = 'This sentence will be split into individual parts';
let res = sent.split(" ");
console.log(res);
console.log(sent.split(' '));
