/* // for of

// ["","","",]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}
for (const num of "Hello") {
  // console.log(num);
}

// maps
const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) { // will not work on objects since not iterable so for this we use FORIN loop
//   console.log(key, ":-", value);
// }

const obj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// forin loop *****************************************************************
for (const key in obj) {
  console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
    
}


*/

//  for-each loop ***********************************************************************

const coding = ["js", "rb", "py", "java", "cpp", "python"];

// coding.forEach(item => {
//     console.log(item);

// });

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
