// Singleton

// Note :- koi bhi constructor se banate hain toh singleton hi bnata hai ok!
// or agr literal se bnayege toh nai bnta hai!

// Literals constructor and singleton are ways to declare a object!!!!

// Object Literals
// Object.create  // ------ yehi h constructor method k through object bnana

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh", // ye jo name hai voh string hi h pr likte ni aisa kyuki js detect kr leta h khud se
  "full name": "Hitesh Choudhary",
  age: 18,
  [mySym]: "mykey1",
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
