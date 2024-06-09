const router = require('express').Router();
const controller = require('../controllers/weather');

router.get('/', controller.getWeather);

module.exports = router;
