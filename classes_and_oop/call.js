function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

/** harr function ka apna this hota h toh voh function agr call stack se ud gya toh uska this bhi udd jayega
 * toh usse dusre function ko vo value ni mil payegi jo properties thi ni mil payegi jo bhi set kr rkha tha or this kya h ek object
 *  hi h node env me toh global this me store kr liya ki lo bhai rkho tum global this se inject krlo apne me or use krlo uska access tmhare paas ab */

function createUser(username, email, password) {
  SetUsername.call(this, username); // call dusre function ka reference hold kr leta hai, call humara current execution context kisi or function ko pass kr deta hai

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
