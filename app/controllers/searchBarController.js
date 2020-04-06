const m = require("../model/model");
const db = require ("../database/models/");
const Op = db.Sequelize.Op;
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;

const idx = 'id';

const controller = {
	root: (req, res) => {
		Products
			.findAll( 	
				{
					where: {
						prodName: {[Op.like]: `%${req.query.search}%`},
						state:1
					}
			  	}
			)
			.then(products => {
				console.log(products.length)
				return res.render('productsSearch', { 
				title2: 'Resultados de tu búsqueda',
				products
				});
			})
			.catch(error => res.send(error));
	
	},
				
};

module.exports = controller