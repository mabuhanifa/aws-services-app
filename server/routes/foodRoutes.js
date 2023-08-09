const { Router } = require("express");

const { getAllFoods, createFood } = require("../controllers/foodControllers");

const router = Router();

router.route("/").get(getAllFoods);

router.route("/").post(createFood);

module.exports = router;
