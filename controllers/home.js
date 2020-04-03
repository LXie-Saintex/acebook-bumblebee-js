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
  Search: function(req, res) {
    let pattern = req.body.keywords;
    User.find({username: new RegExp(pattern)}, function(err, foundUsers){
      if (err) { throw err }
      res.status(201).render('home/index', { foundUsers : foundUsers });
    });
  }
};

module.exports = HomeController;
