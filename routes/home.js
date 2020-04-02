var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/new', HomeController.New);
router.post('/new', HomeController.Create);
module.exports = router;
