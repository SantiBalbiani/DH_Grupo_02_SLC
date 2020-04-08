const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiSellsController');

router.get('/allSells', controller.getAllSells);
router.get('/sellsHead', controller.getSellsHeaders);
module.exports = router;