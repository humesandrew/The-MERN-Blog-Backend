const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,

  }
});

// create a static method we can call later //
userSchema.statics.signup = async function (email, password) {
  // we will add validation before we even create an email and pw//
  // 1st check to see if email and pw are not empty //
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }
  // // then check if its a valid email and password with validator//
  if (!validator.isEmail(email)) {
    throw Error("Invalid email.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use.");
  }
  // set up password hashing with a salt of 10 //
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  // now we need to take this password and store it as a document in mongo//
  const user = await this.create({ email, password: hash });
  return user;
};

//add static login method//
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid email");
  }

  // use bcrypt method 'compare' to compare plain text to hashed password//
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
