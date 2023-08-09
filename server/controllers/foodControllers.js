const foods = require("../data.json");
const Food = require("../models/Food");

const getAllFoods = async (req, res) => {
  try {
    res.json(foods);
  } catch (error) {
    console.log(error);
  }
};

const createFood = async (req, res) => {
  try {
    const newFood = Food.create(req.body);

    res.json(newFood);
  } catch (error) {
    console.log(error);
  }
};

const imgUploader = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllFoods,
  createFood,
  imgUploader,
};
