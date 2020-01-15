const fs = require('fs');
const path = require('path');
const m = require("../model/model");

const fpath = path.join(__dirname, '../data/products.json');
//const productsFilePath = path.join(__dirname, '../data/products.json');
const idx = 'id';

const controller = {
	root: (req, res) => {
		let allProducts = m.loadFile(fpath); 
		res.render('products', {title2: 'Todos los Productos', prods: allProducts } );
	},
	getProdsByCat: (req, res) =>{
		let allProducts = m.loadFile(fpath);
		allProducts = allProducts.filter( prd => prd.categoria == req.params.category);
		res.render('products', { title2: (" Productos de tipo " + req.params.category) , prods: allProducts  })
	},
	getProduct: (req, res) => {
		//let html = readHTML('productDetail');
		let todosProd = m.loadFile(fpath);
		elProd = m.getData(todosProd, req.params.id);
		//elProd2 = todosProd.find( prod => prod.id == req.params.id )
		res.render('productDetailOk', {title2: 'Detalle del Producto', prod: elProd});
	},

	

	createProduct: (req, res) => {
		//let html = readHTML('productCart');
		res.render('productAdd', {title2: 'SLC: Carrito'});
	},
	editProduct: (req, res) => {
		//	let html = readHTML('register');
		let todosProd = m.loadFile(fpath);
		elProd = todosProd.find( prod => prod.id == req.params.id )
		res.render('editProduct', { prod:elProd, title2: 'Editar Producto', msg: 'Modificar Producto'});
	},
	saveProduct: (req, res) => {
		let newProduct = {
			id: m.genId(fpath),
			...req.body,
			image: req.file.filename,
		}
		m.create(newProduct, fpath);
		res.redirect('/');
	},
	saveEditProduct: (req, res) => {
	//	let html = readHTML('productAdd2');
		let newProduct = {
			id: parseInt(req.params.id),
			...req.body,
			image: req.file.filename,
		};
		m.saveChanges(newProduct, fpath);
		let guardado = "/products/" + elProd.id + "/edit"; 
		
		res.redirect(guardado);
	},
	deleteProduct: (req, res) => {
		m.delete_(req.params.id, fpath);
		res.redirect("/");
	},
};

module.exports = controller