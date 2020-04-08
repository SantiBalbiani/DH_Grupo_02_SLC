const fs = require('fs');
const path = require('path');
const m = require("../model/model");
const db = require ("../database/models/");
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;

const fpath = path.join(__dirname, '../data/products.json');
//const productsFilePath = path.join(__dirname, '../data/products.json');
const idx = 'id';

const controller = {
	root: (req, res) => {
		Products
			.findAll( 	
				{
					where: {
						state:1
					}
			  	}
			)
			.then(products => {
				return res.render('products', { 
					title2: 'Todos los Productos',
					products
				});
			})
			.catch(error => res.send(error));
	
	},
	getProdsByCat: (req, res) =>{
		Products
			.findAll(
				{
					where: {
						idCategory: req.params.category,
						state:1
					}
			  	}
			)
			.then(products => {
				return res.render('products', { 
				title2: "Productos por categoría" ,
				products
				});
			})
			.catch(error => res.send(error));


	},
	getProduct: (req, res) => {
		Products
			.findByPk(req.params.id, {
			include: ['categories']
			})
			.then(productDB => {
				var product = productDB.get({ plain: true});
     			console.log(product); //Should be valid json object
				
				return res.render('productDetailOk', { 
					title2: `Detail of ${productDB.prodName}`, msg: ' ',
					product
				});
			})
			.catch(error => res.send(error));

	},

	createProduct: (req, res) => {
        Categories
            .findAll()
            .then(categories => {
                res.render('productAdd', {
					title2: 'Product Create',
					categories
                     
                });
            })
            .catch(error => res.send(console.log(error)));
    },


	editProduct: (req, res) => {
		sequelize
			.query('SELECT * from categories')
			.then(categories => {
				Products
					.findByPk(req.params.id)
					.then(product => {
						return res.render('editProduct', { 
								categories: categories[0],
								product,
								msg: 'Modificar Producto',
								title2: `Editar producto ${product.prodName}`
								});
									})
			.catch(error => res.send(error));
		})
		.catch(error => res.send(error));

	},

	saveProduct: (req, res) => {
		data = {
			imageName: req.file.filename,
			idSeller: req.session.user.id,
			createdAt: new Date(),
			...req.body
		}
		Products
			.create (data)
			.then(product => {
				return res.redirect ("/products");
				})
			.catch (error => res.send(console.log(error)));
	},
	saveEditProduct: (req, res) => {
		data = {
			imageName: req.file.filename,
			...req.body
		}
		Products
			.update(data, {
				where: {
					id: req.params.id
						}
		})
		.then(() => res.redirect('/'))
		.catch(error => res.send(error));
	},

	deleteProduct: (req, res) => {
				  
		Products
			.update (
				{state: 0},
				{where: { id: req.params.id }}
				)
			.then(
				res.redirect("/")
			)
			.catch(error => res.send(error));
	
	},
	addProductToCart:(req, res) =>{
		let product = { id: req.body.id, cant: req.body.cant, prodName: req.body.prodName, price: req.body.price, imageName: req.body.imageName };
		var cart = req.session.cart || [];  
		cart.push(product);
		req.session.cart = cart;
		res.cookie('cart', JSON.stringify(cart), { maxAge: 180000});
		res.redirect("/products");
	},
	buyProd:(req, res) =>{
		let product = { id: req.body.id, cant: req.body.cant, prodName: req.body.prodName, price: req.body.price, imageName: req.body.imageName };
		var cart = req.session.cart || [];  
		cart.push(product);
		req.session.cart = cart;
		res.cookie('cart', JSON.stringify(cart), { maxAge: 180000});
		return res.render('productCart', {title2: 'SLC: Carrito'});
	},
	deleteCart: (req, res) =>{
		req.session.cart = [];
		res.cookie('cart', null, { maxAge: -1 });
		res.redirect("/");
	}
				
};

/* function renderProduct(aProd, res){
		  res.render('productDetailOk', { 
		title2: `Detail of ${aProd.prodName}`, msg: 'Product Added to the Cart',
		product: aProd
	}); 
	//console.log(res.locals.user.cart);
	res.redirect("/products");
} */

module.exports = controller