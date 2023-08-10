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
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("You need enter values in all fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Valid email must be entered");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Strong password is required");
  }
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email is already in system, please signin");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please enter in all fields");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Can not find user, please login");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Can not sign you in, wrong password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
