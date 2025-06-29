//  array

const arr = [0, 1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4);

/* Shallow copying - changes made to original value since points directly to the reference in heap
Deep copying - changes not reflecting in original value since new memory is allocated in stack */

// console.log(arr[0]);

// Array methods

// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(9);
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.includes(9));

// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice , Splice

console.log("A", arr);
const myn1 = arr.slice(1, 3);
console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3);
console.log("C", arr);
console.log(myn2);
