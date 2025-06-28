console.log(null > 0); //output = false
console.log(null == 0); //output = false
console.log(null >= 0); //output = true

/* The reason is that an equality check and comparisions work differently.
Comparisions convert null to a number, treating it as 0 */


