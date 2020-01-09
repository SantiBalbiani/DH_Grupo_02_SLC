const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

function getAllProducts () {
	let prodsFileContent = fs.readFileSync(productsFilePath, 'utf-8');
	let prods;
	if (prodsFileContent == '') {
		prods = [];
	} else {
		prods = JSON.parse(prodsFileContent);
	}
	return prods;
};

function generateId () {
	let products = getAllProducts();
	if (products.length == 0) {
		return 1;
	}
	let lastProduct = products.pop();
	return lastProduct.id + 1;
}
function guardarProducto (userData) {
let prods = getAllProducts();
	prods.push(userData);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
};

const controller = {
	root: (req, res) => {
		let allProducts = getAllProducts(); 
		res.render('products', {title2: 'Todos los Productos', prods: allProducts } );
	},
	getProduct: (req, res) => {
		//let html = readHTML('productDetail');
		res.render('productDetail', {title2: 'Detalle del Producto'});
	},
	createProduct: (req, res) => {
		//let html = readHTML('productCart');
		res.render('productAdd', {title2: 'SLC: Carrito'});
	},
	editProduct: (req, res) => {
	//	let html = readHTML('register');
		res.render('editProduct', {title2: 'SLC: Registro'});
	},
	saveProduct: (req, res) => {
		let newProduct = {
			id: generateId(),
			avatar: req.file.filename,
			...req.body
		}
		guardarProducto(newProduct);
		res.redirect('/');
	},
	saveChanges: (req, res) => {
	//	let html = readHTML('productAdd2');
		res.render('productAdd2',{title2: 'Step 2 of 2'});
	},
	deleteProduct: (req, res) => {
		//
	},
};

module.exports = controller