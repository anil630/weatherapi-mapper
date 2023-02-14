const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");

router.get("/", weatherController.dropDownList);
router.get("/current", weatherController.getCurrentWeatherData);
router.get('/forecast', weatherController.getForecastWeatherData);
module.exports = router;