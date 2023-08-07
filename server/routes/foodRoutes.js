const { Router } = require("express");

const { getAllFoods } = require("../controllers/foodControllers");

const router = Router();

router.route("/").get(getAllFoods);

module.exports = router;
