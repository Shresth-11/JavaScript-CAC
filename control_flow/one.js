// if

const isUserLoggedIn = true;

if (2 == "2") {
  console.log("executed");
}

/* NOTE :- '===' checks the type of the element or variable also */
/* NOTE :- '!==' checks the type of the element or variable also */

// Truthy and Falsy Values **************************************************

const userEmail = " ";
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

// Falsy value :- false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truth value :- true, 1, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {   // this not understood
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined****************************************************************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 15;

// console.log(val1);




// Terniary Operator*************************************************************************

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
