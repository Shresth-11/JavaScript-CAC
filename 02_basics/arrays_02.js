const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

/*  marvel_heroes.push(dc); // array k andr array aa jayega issse jo ki ek issue hai!!!!
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);*/

// const allHeroes = marvel_heroes.concat(dc); // returns a new array
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc];
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
