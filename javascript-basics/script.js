// variables challenge

let firstName = "Prashant";
let lastName = "Kumar";
let address = "main street";
address = "last street";

console.log(firstName);
console.log(lastName);
console.log(address);

// String Concatenation

const street = "baridih";
const country = "india";
const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// Numbers

const score1 = 65;
const score2 = 85;
const score3 = 75;

const totalScore = score1 + score2 + score3;
const avgScore = (score1 + score2 + score3) / 3;

console.log(totalScore);
console.log(avgScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;

remainingPlates += 1;

const message = "There are" + " " + remainingPlates + " " + "plates available";
console.log(message);

// Arrays

const fruits = ["apple", "oranges", "grapes", 30];
const first = fruits[0];
fruits[3] = "watermelon";
console.log(fruits);
console.log(first);
