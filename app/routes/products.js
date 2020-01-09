const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

let diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../../public/images/products'));
	},
	filename: function (req, file, cb) {
		let finalName = Date.now() + path.extname(file.originalname);
		cb(null, finalName);
	}
});

let upload = multer({ storage: diskStorage })

/* GET users listing. */
router.get('/', productsController.root);
router.get('/:id', productsController.getProduct);
router.get('/create', productsController.createProduct);
router.get('/:id/edit', productsController.editProduct);
router.post('/', upload.single('prodImage'), productsController.saveProduct);
router.put('/:id', productsController.saveChanges);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;

