const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  liked_videos: {
    type: Array,
    default: [],
  },
});

UserModel.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );
  return token;
};

const User = mongoose.model("User", UserModel);

module.exports = User;
