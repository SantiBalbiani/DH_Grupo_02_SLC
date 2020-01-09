const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

let diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, 'app', '../../public/images/products'));
	},
	filename: function (req, file, cb) {
		let finalName = file.originalname  /*+ path.extname(file.originalname)*/;
		cb(null, finalName);
	}
});

let upload = multer({ storage: diskStorage })

/* GET users listing. */
router.get('/', productsController.root);
router.get('/create', productsController.createProduct);
router.get('/:id', productsController.getProduct);
router.get('/:id/edit', productsController.editProduct);
router.post('/', upload.single('image'), productsController.saveProduct);
router.put('/:id/edit', upload.single('image'), productsController.saveChanges);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;

