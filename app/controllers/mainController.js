const fs = require('fs');
const path = require('path');



// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let finalPath = path.join( __dirname, `../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(finalPath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		//let html = readHTML('index');
		res.render('index', {title: 'Inicio'} );
	},
	productDetail: (req, res) => {
		let html = readHTML('productDetail');
		res.render('productDetail');
	},
	productCart: (req, res) => {
		//let html = readHTML('productCart');
		res.render('productCart', {title: 'Compras'});
	},
	register: (req, res) => {
		let html = readHTML('register');
		res.render('register');
	},
	productAdd: (req, res) => {
		let html = readHTML('productAdd');
		res.send(html);
	},
	productAdd2: (req, res) => {
		let html = readHTML('productAdd2');
		res.send(html);
	},
	legal: (req, res) => {
		let html = readHTML('legal');
		res.send(html);
	},
	registerforma: (req, res) => {
		let html = readHTML('registerforma');
		res.send(html);
	},
	registerformb: (req, res) => {
		let html = readHTML('registerformb');
		res.send(html);
	}

};

module.exports = controller
//let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
//	return htmlFile;
//}
 
