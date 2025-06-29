// {} // yehi scope hai jab ye funciton or if-else k saath aata hai

if (true) {
  let a = 10;
  const b = 20; // abhi hum block scope k andr hai
  var c = 30;
}

// or ye hai global scope bahar in {} brackets se ok !!!!

// console.log(a);
// console.log(b);
// console.log(c); // ye print kr dega coz 'var' dosent follow scope's

/* NOTE :-  windows like console ka global scope or code environment ka global scope like node alag alag hota hai */

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website); // error
}

// *****************************************    interesting    ******************************************

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5); // error coz of hoisting
const addTwo = function (num) {
  return num + 2;
};
