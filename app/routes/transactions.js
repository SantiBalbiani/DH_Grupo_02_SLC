const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const multer = require('multer');
const path = require('path');

router.post('/buy', transactionController.buyProd);
router.post('/saveTheCart', transactionController.saveCart)

module.exports = router;