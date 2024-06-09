const router = require('express').Router();
const controller = require('../controllers/geopolitics');

router.get('/', controller.getGeopolitics);

module.exports = router;
