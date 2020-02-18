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
				
			)
			.then(products => {
				return res.render('products', { 
					title2: 'Todos los Productos',
					products
				});
			})
			.catch(error => res.send(error));
	
		//let allProducts = m.loadFile(fpath); 
		//res.render('products', {title2: 'Todos los Productos', prods: allProducts } );
	},
	getProdsByCat: (req, res) =>{
		Products
			.findAll(
				{
					where: {
						idCategory: req.params.category,
						
					}
			  	}
			)
			.then(products => {
				return res.render('products', { 
				title2: "Todos los productos de la categoría ",
				products
				});
			})
			.catch(error => res.send(error));


		//let allProducts = m.loadFile(fpath);
		//allProducts = allProducts.filter( prd => prd.categoria == req.params.category);
		//res.render('products', { title2: (" Productos de tipo " + req.params.category) , prods: allProducts  })
	},
	getProduct: (req, res) => {
		Products
			.findByPk(req.params.id, {
			include: ['categories']
			})
			.then(product => {
				return res.render('productDetailOk', { 
					title2: `Detail of ${product.prodName}`,
					product
				});
			})
			.catch(error => res.send(error));
	
	
		
		// ya estaba con // let html = readHTML('productDetail');
		//let todosProd = m.loadFile(fpath);
		//elProd = m.getData(todosProd, req.params.id);
		// ya estaba con // elProd2 = todosProd.find( prod => prod.id == req.params.id )
		//elProd==undefined? res.render('notFound', {msg:"Producto Inexistente"}):
		//res.render('productDetailOk', {title2: 'Detalle del Producto', prod: elProd});
	},

	createProduct: (req, res) => {
		//let html = readHTML('productCart');
		res.render('productAdd', {title2: 'SLC: Carrito'});
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

		//YA ESTABA //	let html = readHTML('register');
		//let todosProd = m.loadFile(fpath);
		//elProd = todosProd.find( prod => prod.id == req.params.id );
		//res.render('editProduct', { prod:elProd, title2: 'Editar Producto', msg: 'Modificar Producto'});
	},

	saveProduct: (req, res) => {
		//let newProduct = {
		//	id: m.genId(fpath),
		//	...req.body,
		//	image: req.file.filename,
		//}
		//m.create(newProduct, fpath);
		//res.redirect('/');
	},
	saveEditProduct: (req, res) => {
		Products
			.update(req.body, {
				where: {
					id: req.params.id
						}
		})
		.then(() => res.redirect('/'))
		.catch(error => res.send(error));
	
	//YA ESTABA ANTES	//	let html = readHTML('productAdd2');
	//let allProds = m.loadFile(fpath);
    // let   oldProd = m.getData(allProds, req.params.id);
	//let file = 'file';
	//let image;

	//(req.hasOwnProperty(file))?  image = req.file.filename : image = oldProd.image;

	//	let newProduct = {
	//		id: parseInt(req.params.id),
	//		...req.body,
	//		image: image,
	//	};
	//	m.saveChanges(newProduct, fpath);

	//	let prod = newProduct;
	//	res.render('editProduct', {title2: "detalle de producto", msg: "Producto guardado con éxito!", elProd:prod} );
		//YA ESTABA ANTES	//let guardado = "/products/" + newProduct.id + "/edit";  //elProd???
		
		//YA ESTABA ANTES	//return res.redirect(guardado);

		 //YA ESTABA ANTES	//res.end();
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
	
		//m.delete_(req.params.id, fpath);
		//res.redirect("/");
	},
};

module.exports = controller