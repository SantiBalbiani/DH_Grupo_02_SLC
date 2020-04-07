const fs = require('fs');
const path = require('path');
// const bcrypt = require('bcrypt');


// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let finalPath = path.join( __dirname, `../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(finalPath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		//let html = readHTML('index');
		
		return res.render('index', {title2: 'SLC Componentes Electrónicos'} );
	},
	//productDetail: (req, res) => {
		//let html = readHTML('productDetail');
		//res.render('productDetail', {title2: 'Detalle del Producto'});
		//res.render('productDetail');
	//}, 
	productCart: (req, res) => {
		//let html = readHTML('productCart');
		 
		return res.render('productCart', {title2: 'SLC: Carrito'});
	},
	register: (req, res) => {
	//	let html = readHTML('register');
		res.render('register', {title2: 'SLC: Registro', msg: "Hola :) Ingresá con tu email y contraseña"});
	},
	productAdd: (req, res) => {
	//	let html = readHTML('productAdd');
		res.render('productAdd',{title2: 'Step 1 of 2'});
	},
	productAdd2: (req, res) => {
	//	let html = readHTML('productAdd2');
		res.render('productAdd2',{title2: 'Step 2 of 2'});
	},
	legal: (req, res) => {
		let html = readHTML('legal');
		res.send(html);
	},
	registerforma: (req, res) => {
	//	let html = readHTML('registerforma');
		res.render('registerforma',{title2: 'Register'});
	},
	registerformb: (req, res) => {
//		let html = readHTML('registerformb');
		res.render('registerformb',{title2: 'Register'});
	}

};

module.exports = controller
//let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
//	return htmlFile;
//}
 
