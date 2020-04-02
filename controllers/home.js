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
  }
};

module.exports = HomeController;
