var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/signup', function(req, res, next){
      var messages = req.flash('error');
      res.render('user/signup', {hasErrors: messages.lenght > 0, messages: messages});
});



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/');
}

module.exports = router;
