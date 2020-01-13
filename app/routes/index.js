// ************ Require's ************

const express = require('express');
const  router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');



/* GET */
router.get('/', mainController.root);
//router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);
router.get('/productAdd', mainController.productAdd);
router.get('/productAdd2', mainController.productAdd2);
router.get('/legal', mainController.legal);
router.get('/registerforma', mainController.registerforma);
router.get('/registerformb', mainController.registerformb);
module.exports = router;
