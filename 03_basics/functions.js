function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,5);
// console.log("Result: ", result);  //Undefined output

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2; // result is function scope
  //   return result;

  return number1 + number2;
}
const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage()); // output - undefined just logged in

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)
handleObject({
  username: "sam",
  price: 566,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

