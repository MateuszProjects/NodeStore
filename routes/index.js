var express = require('express');
var router = express.Router();
var models = require('../models');

//models.user.sync();
//models.account.sync();
//models.shopmodel.sync();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('shop/index', { title: 'Express' });
});

router.get('/add-to-cart/:id', function(req, res, next){

});

router.get('/shopping-cart', function(req, res, next){

});
module.exports = router;
