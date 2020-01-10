const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

let diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, 'app', '../../public/images/users'));
	},
	filename: function (req, file, cb) {
		let finalName = file.originalname  /*+ path.extname(file.originalname)*/;
		cb(null, finalName);
	}
});

let upload = multer({ storage: diskStorage })

/* GET users listing. */

router.get('/', userController.getUsers);
router.get('/create', userController.createUser);
router.get('/:userId', userController.getUser);

router.get('/:userId/edit', userController.editUser);
router.post('/', upload.single('image'), userController.saveUser);
router.put('/:userId',upload.single('image'), userController.saveChanges);
router.delete('/:userId', userController.deleteUser);
module.exports = router;


