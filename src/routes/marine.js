const router = require('express').Router();
const controller = require('../controllers/marine');

router.get('/', controller.get);

module.exports = router;
