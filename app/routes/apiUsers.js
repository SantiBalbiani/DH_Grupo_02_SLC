const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiUserController.js');

router.get('/', controller.index);
router.get('/:id', controller.find);

module.exports = router;