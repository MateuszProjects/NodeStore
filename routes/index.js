var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Express' });
});

router.get('/add-to-cart/:id', function(req, res, next){

});
module.exports = router;
