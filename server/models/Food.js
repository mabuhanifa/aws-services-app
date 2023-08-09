const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: String,
    country: String,
    img: String,
    price: String,
    restaurant: {
      name: String,
      address: String,
    },
    isAvailable: Boolean,
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
