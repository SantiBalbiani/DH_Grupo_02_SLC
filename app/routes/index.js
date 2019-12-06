// ************ Require's ************

const express = require('express');
const  router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


/* GET */
router.get('/', mainController.root);
router.get('/productDetail', mainController.productDetail);
router.get('/shoppingCart', mainController.shoppingCart);
router.get('/register', mainController.register);
router.get('/loadProduct', mainController.loadProduct);

module.exports = router;
