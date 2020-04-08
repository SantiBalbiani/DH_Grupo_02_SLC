const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiUserController.js');

router.get('/', controller.index);
router.get('/allUsrs', controller.allUsers);
router.get('/:id', controller.find);
router.get('/fillCookie/:id', controller.findUserCookie);

module.exports = router;