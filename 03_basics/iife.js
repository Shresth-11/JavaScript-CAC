// Immediately Invoked Function Expressions (IIFE)
// Jo function immediately execute ho jaye

/* Global scope k pollution se problem hoti h kaii baar toh us global scope k variable etc declaration ko htane k liye
  bachne k liye iife ka use krte h jo ki turnt invoke ho jata hai */

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// chai();

((name) => {
  // unamed IIFE, and also parameter is used name in arrow function
  console.log(`DB CONNECTED TO ${name}`);
})("Shresth");
