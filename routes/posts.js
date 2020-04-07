var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/posts')

router.get('/', PostsController.Index);
router.post('/', PostsController.Create);
router.get('/new', PostsController.New);
router.post('/like/:id', PostsController.Like);
router.post('/comment/:id', PostsController.Comment);
router.post('/search', PostsController.Search);

module.exports = router;
