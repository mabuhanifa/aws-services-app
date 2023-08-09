const { Router } = require("express");

const { getAllFoods, imgUploader } = require("../controllers/foodControllers");

const router = Router();

router.route("/").get(getAllFoods);

router.route("/img").post(imgUploader);

module.exports = router;
