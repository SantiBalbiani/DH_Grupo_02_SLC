const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiProdsByCategory');

router.get('/allCategories', controller.allTheCategories);
router.get('/:idCat', controller.index);

module.exports = router;