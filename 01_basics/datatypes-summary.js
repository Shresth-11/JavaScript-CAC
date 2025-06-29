// JavaScript is a dynamically typed language
// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNumber = 8796546531254879874564n;

// Reference(Non primitive)

// Array, Objects, functions

const heroes = ["shaktiman", "doga", "Ironman"];
let obj = {
  name: "Shresth",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof outsideTemp); // object output
console.log(typeof heroes); // object output

// *************************************************************************************

// Stack (Primitve), Heap (Non-Primitive)
/* Tack me data ka copy milta hai , or heap me reference milta hai yani change kiyaa toh change ho jayega original value*/

let myYoutubeName = "shresth";
let anotherName = myYoutubeName;

anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "shresth@google.com";

console.log(userOne);
console.log(userTwo);

