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
		let html = readHTML('index');
		res.send(html);
	},
	productDetail: (req, res) => {
		let html = readHTML('productDetail');
		res.send(html);
	},
	productCart: (req, res) => {
		let html = readHTML('productCart');
		res.send(html);
	},
	register: (req, res) => {
		let html = readHTML('register');
		res.send(html);
	},
	productAdd: (req, res) => {
		let html = readHTML('productAdd');
		res.send(html);
	},
	legal: (req, res) => {
		let html = readHTML('legal');
		res.send(html);
	}

};

module.exports = controller
//let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
//	return htmlFile;
//}
 
