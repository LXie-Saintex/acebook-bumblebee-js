var User = require('../models/user');

var HomeController = {
  Index: function(req, res) {
    res.render('home/index');
  },
  New: function(req, res) {
  	res.render('home/new');
  },
  Create: function(req, res) {
  	var user = new User(req.body);
  	user.save(function(err, user) {
  		if (err) { throw err; }
  		res.status(201).render('home/sign_in');
  	})
  },
  SignIn: function(req, res) {
    res.render('home/sign_in');
  },
  SignedIn: function(req, res) {
      User.find({username: req.body.username}, function(err, user){
      if(user[0].password === req.body.password) {
        res.cookie('userid', user[0].id)
        res.cookie('name', user[0].username)
        res.redirect('/posts');
      } else {
        res.render('home/new', { error: 'We could not find those credentials, please sign up before signing in' });
      }
      })
    },
  Search: function(req, res) {
    let pattern = req.body.keywords;
    User.find({username: new RegExp(pattern)}, function(err, foundUsers){
      if (err) { throw err }
      res.status(201).render('home/index', { foundUsers : foundUsers });
    });
  }
}

module.exports = HomeController;
