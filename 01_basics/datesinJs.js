// Date

let myDate = new Date();
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate1 = new Date("2023-01-14");
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
