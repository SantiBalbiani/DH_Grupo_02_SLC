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
function guardarProducto (prodData) {
let prods = getAllProducts();
	prods.push(prodData);
    fs.writeFileSync(productsFilePath, JSON.stringify(prods, null, ' '));
};

function guardarCambiosProducto(prodData) {

	let prodsFileContent = fs.readFileSync(productsFilePath, 'utf-8');
	let prods;
	if (prodsFileContent == '') {
		prods = [];
	} else {
		prods = JSON.parse(prodsFileContent);
	}

	prods = prods.filter( prod => prod.id != prodData.id);

	prods.push(prodData);
	fs.writeFileSync(productsFilePath, JSON.stringify(prods, null, ' '));
	};

function borrarProducto(id){
	let products = getAllProducts();
	products = products.filter( prod => prod.id != id);
	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
}

const controller = {
	root: (req, res) => {
		let allProducts = getAllProducts(); 
		res.render('products', {title2: 'Todos los Productos', prods: allProducts } );
	},
	getProduct: (req, res) => {
		//let html = readHTML('productDetail');
		let todosProd = getAllProducts ();
	elProd = todosProd.find( prod => prod.id == req.params.id )
		res.render('productDetail', {title2: 'Detalle del Producto', prod: elProd});
	},
	createProduct: (req, res) => {
		//let html = readHTML('productCart');
		res.render('productAdd', {title2: 'SLC: Carrito'});
	},
	editProduct: (req, res) => {
	//	let html = readHTML('register');
	// Buscar producto
	let todosProd = getAllProducts ();
	elProd = todosProd.find( prod => prod.id == req.params.id )
		res.render('editProduct', { prod:elProd, title2: 'Editar Producto'});
	},
	saveProduct: (req, res) => {
		let newProduct = {
			id: generateId(),
			...req.body,
			image: req.file.filename,
		}
		guardarProducto(newProduct);
		res.redirect('/');
	},
	saveChanges: (req, res) => {
	//	let html = readHTML('productAdd2');

	let todosProd = getAllProducts ();
	elProd = todosProd.find( prod => prod.id == req.params.id )
	elProd.prodName = req.body.prodName;
	elProd.description = req.body.description;
	elProd.price= req.body.price;
	elProd.discount = req.body.discount;// req.body.discount;
	elProd.image = req.file.filename,
	guardarCambiosProducto(elProd);
	let guardado = "/products/" + elProd.id + "/edit" 
	res.redirect(guardado);
	},
	deleteProduct: (req, res) => {
		borrarProducto(req.params.id);
		res.redirect("/");
	},
};

module.exports = controller