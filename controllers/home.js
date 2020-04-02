var User = require('../models/user');

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Acebook' });
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
    var currentUser;
      User.find({username: req.body.username}, function(err, user){
      currentUser = user
      console.log(currentUser)
      if(currentUser[0].password === req.body.password) {
        console.log(user)
        res.cookie('userid', currentUser[0].id)
        res.cookie('name', currentUser[0].username)
        res.redirect('/posts');
      } else {
        console.log('Invalid user');
        res.render('home/new', { error: 'We could not find those credentials, please sign up before signing in' });
      }
      })
    }
  }

module.exports = HomeController;
