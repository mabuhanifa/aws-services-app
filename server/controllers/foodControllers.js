const foods = require("../data.json");

const getAllFoods = async (req, res) => {
  try {
    res.json(foods);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllFoods,
};
