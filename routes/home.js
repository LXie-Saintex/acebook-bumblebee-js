var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/new', HomeController.New);
router.post('/new', HomeController.Create);
router.get('/sign-in', HomeController.SignIn);
router.post('/sign-in', HomeController.SignedIn);
module.exports = router;
