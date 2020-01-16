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
router.get('/login', userController.logIn)
router.get('/create', userController.createUser);
router.get('/create2', userController.createUser2);

router.get('/:id', userController.getUser);
router.get('/:id/edit', userController.editUser);

router.post('/', upload.single('image'), userController.saveUser);
router.put('/:id/edit',upload.single('image'), userController.saveChanges);
router.delete('/:id', userController.deleteUser);


module.exports = router;


