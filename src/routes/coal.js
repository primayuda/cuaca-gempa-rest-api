const router = require('express').Router();
const controller = require('../controllers/coal');

router.get('/', controller.getCoal);

module.exports = router;
