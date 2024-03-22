const mongoose = require("mongoose");

const Category = mongoose.model("Category", {
  isIcon: String,
  categoryName: String,
  isColor: String,
  email: String,
});

module.exports = {
  Category,
};
