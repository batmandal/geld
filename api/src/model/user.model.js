const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  password: String,
  updateAt: Date,
  createdAt: Date,
});

module.exports = {
  User,
};
