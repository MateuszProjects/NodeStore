const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const keys = require('../config/keys');
const crypto = require('crypto');


passport.serializeUser(function(user, done) {
   // done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
   /*connection.query("select * from db_sql where id = "+ id, function (err, rows){  
        done(err, rows[0]);
    });*/
});

passport.use('local.singup', new LocalStrategy({

}, function (req, email, passport, done){

}));

passport.use('local.signin', new LocalStrategy({

}, function(req, email, passport, done){

}));
