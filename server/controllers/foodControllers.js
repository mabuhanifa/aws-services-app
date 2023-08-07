const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllFoods,
};
