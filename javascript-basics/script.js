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

// Functions

const calculateTotal = function (subTotal, tax) {
  const total = subTotal + tax;
  return total;
};

let result = calculateTotal(10, 20);
console.log(result);

let order1 = calculateTotal(100, 200);
let order2 = calculateTotal(85, 95);
let order3 = calculateTotal(85, 65);

console.log(order1, order2, order3);

// Object

const car = {
  maker: "mercedes",
  model: "S class",
  year: 2016,
  colors: ["red", "black", "white"],
  hybrid: true,
  drive: function () {
    console.log("drive");
  },
  stop: function () {
    console.log("stop");
  },
};

console.log(car.maker);
console.log(car.colors[0]);
car.drive();
car.stop();

// Conditional

const person1 = {
  name: "Prashant",
  age: 20,
  status: "resident",
};

const person2 = {
  name: "Sagar",
  age: 24,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you can not cast a vote");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you can not cast a vote");
}

// String

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

let resultName = fullName({ lastName: "Kumar", firstName: "Prashant" });
console.log(resultName.toUpperCase());

// Callback Function

function morning() {
  console.log("hello");
}

function greet(name, cb) {
  cb();
  const myName = "john";
  console.log(`${name},my name is ${myName}`);
}

greet("bobo", morning);

// Array Challenges

const students = [
  { id: 1, name: "peter", score: 80, favouriteSub: "maths" },
  { id: 1, name: "bob", score: 70, favouriteSub: "english" },
  { id: 1, name: "maria", score: 85, favouriteSub: "hindi" },
  { id: 1, name: "susan", score: 90, favouriteSub: "science" },
  { id: 1, name: "gopal", score: 60, favouriteSub: "history" },
];

console.log(students);

// map

const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});

console.log(updatedStudents);

// filter

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }

  return student.score >= 80;
});

console.log(highScores);

// find

const specificId = students.find(function (student) {
  return student.id === 1;
});

console.log(specificId);

// reduce

const averageScore = students.reduce(function (scoresTotal, student) {
  return scoresTotal + student.score;
}, 0);

console.log(averageScore);

//
