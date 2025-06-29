const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // output :- {} empty

// function chai(){
//     let user = "shresth"
//     console.log(this.username);
// }

// chai()

const chai = () => {
  let username = "shresth";
  console.log(this);
};

// chai()

// const addTwo = (n,m) => {
//   return n + m;    // explicit return kyuki return keyword lagana pd rha hai
// };

// const addTwo = (n, m) => (n + m); // implicit return

const addTwo = (n, m) => ({ username: "shresth" });
console.log(addTwo(3, 4));
