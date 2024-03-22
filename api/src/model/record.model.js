const mongoose = require("mongoose");

const Record = mongoose.model("Record", {
  email: String,
  amount: Number,
  //   date: Date,
  //   time: Date,
  note: String,
  recordType: String,
  name: String,
  recordIcon: String,
  recordColor: String,
});

module.exports = {
  Record,
};
