const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    title: String,
    country: String,
    price: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
