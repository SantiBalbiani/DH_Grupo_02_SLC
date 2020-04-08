const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const searchBarController = require('../controllers/searchBarController');
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

function productsMiddleware (req, res, next) {
    
    if(req.session.user != undefined) {
      return next();
    }
    return res.redirect('/users/register');
  }

  module.exports = productsMiddleware;

/* GET users listing. */
router.get('/', productsController.root);
router.get('/search', searchBarController.root);
router.get('/create', productsMiddleware, productsController.createProduct);
router.get('/delCart', productsController.deleteCart);
router.get('/:id', productsController.getProduct);
router.get('/:id/edit', productsMiddleware, productsController.editProduct);
router.get('/category/:category', productsController.getProdsByCat);
router.post('/', upload.single('imageName'), productsController.saveProduct);
router.post('/addToCart', productsController.addProductToCart)
router.post('/buy1Prod', productsController.buyProd)
router.put('/:id/edit', upload.single('imageName'), productsController.saveEditProduct);
router.delete('/:id', productsController.deleteProduct);


module.exports = router;

