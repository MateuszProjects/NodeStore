const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const keys = require('../config/keys');
const crypto = require('crypto');
const models = require('../models');
const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
     done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    const id = req.body.username;
    models.user.findOne({
        where: {id: id}
    }).then(function(user){
        done(null, user);
    });
});


passport.use('local.singup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (req, username, password, done){
    if(!username || !password ) { return done(null, false, req.flash('message','All fields are required.')); }
    var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

    models.user.findOne({
       where: {username: username}
    }).then(function(user){
       if(user){
        salt = salt+''+password;
        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword = user.password;
  
        if(!(dbPassword == encPassword)){
            return done(null, false, req.flash('message','Invalid username or password.'));
        }
        // add to session user object.
        req.session.user = user;
         return done(null, user);
       } else {
         return done(null, false, req.flash('message', 'Invalid username or password'));  
       }
    });
}
));

passport.use('local.signin', new LocalStrategy({

}, function(req, email, passport, done){

}));
