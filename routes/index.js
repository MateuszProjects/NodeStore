var express = require('express');
var router = express.Router();
var models = require('../models');
var Cart = require('../store/cart');

models.user.sync();
models.item.sync();
models.account.sync();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.item.findAll().then(item => {
        var productChunk = [];
        var chunkSize = 3;
        for (var i=0; i<item.length; i+=chunkSize){
            productChunk.push(item.slice(i, i+chunkSize));
        }
        res.render('shop/index', { title: 'Express', products: productChunk });
  });
});

router.get('/add-to-cart/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {items: {}});
    models.item.findById(productId).then(item => {
        cart.add(item, item.productId);
        req.session.cart = cart;
        res.redirect('/');
    });
});

router.get('/shopping-cart', function(req, res, next){
    var items = req.session.cart;
    res.render('shop/cart', {items: items});
});
module.exports = router;
