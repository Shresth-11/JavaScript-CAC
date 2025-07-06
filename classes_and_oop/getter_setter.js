class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
     this._email= value;
  }

  get password() {
    // getter define kiya toh setter bhi krna pdega define
    // return this._password.toUpperCase();
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const shresth = new User("shresth@gmail.com", "abc");
console.log(shresth.email);
