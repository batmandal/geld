const mongoose = require("mongoose");

const connect2Database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Mandal:20040917@cluster999.tcjq1nb.mongodb.net/income?retryWrites=true&w=majority"
    );

    console.log("Successfully connected to database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connect2Database,
};
