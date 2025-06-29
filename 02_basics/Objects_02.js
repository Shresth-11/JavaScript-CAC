// const tinderUser = new Object() // ye ek singleton object declaraton hai
const tinderUser = {}; // or ye ek non singleton object declaration hai

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = {obj1, obj2};
// const obj3 = {...obj1, ...obj2, ...obj4};

// const obj3 = Object.assign({}, obj1, obj2, obj4); // interesting
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "gmail.com",
  },
  {},
  {},
  ,
  {},
  ,
  {},
  ,
  {},
];

users[0].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // imp and interesting used in production level of code
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring ************************************************************************************************
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: ins, price: p } = course;
console.log(ins);
console.log(p);

// const navbar = ({ company }) => {}; // this code is in react or used in that , just a ezample of destructuring

// navbar((company = "hitesh"));





