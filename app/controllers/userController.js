const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getAllUsers () {
	let usersFileContent = fs.readFileSync(usersFilePath, 'utf-8');
	let users;
	if (usersFileContent == '') {
		users = [];
	} else {
		users = JSON.parse(usersFileContent);
	}
	return users;
};

function generateUserId () {
	let users = getAllUsers();
	if (users.length == 0) {
		return 1;
	}
	let lastUser = users.pop();
	return lastUser.userId + 1;
}
function guardarUser (newUser) {
let users = getAllUsers();
	users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
};

function guardarCambiosUser(user) {

	let usersContent = fs.readFileSync(usersFilePath, 'utf-8');
	let users;
	if (usersContent == '') {
		users = [];
	} else {
		users = JSON.parse(usersContent);
	}
	users = users.filter( usr => usr.userId != user.userId);
	users.push(user);
	fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
	};

    const controller = {
        getUsers: (req, res) => {
            let allUsers = getAllUsers(); 
            res.render('users', {title2: 'Todos los Usuarios', users: allUsers } );
        },
        getUser: (req, res) => {
            //let html = readHTML('productDetail');
            let allUsers = getAllUsers ();
        elUser = allUsers.find( usr => usr.userId == req.params.userId )
            res.render('userDetail', {title2: 'Detalle del Usuario', user:elUser});
        },
        createUser: (req, res) => {
            //let html = readHTML('productCart');
            res.render('userAdd', {title2: 'SLC: Crear Usuario'});
        },
        editUser: (req, res) => {
        //	let html = readHTML('register');
        // Buscar producto
        let allUsers = getAllUsers ();
        elUser = allUsers.find( usr => usr.user == req.params.userId )
            res.render('editUser', { user:elUser, title2: 'Editar Usuario'});
        },
        saveUser: (req, res) => {
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
    
        let allUsers = getAllUsers ();
        elUser = allUsers.find( usr => usr.userId == req.params.userId )
        elUser.nombre = req.body.nombre;
        elUser.apellido = req.body.apellido;
        elUser.email= req.body.email;
        elUser.image = req.file.filename,
        guardarCambiosUser(elUser);
        let guardado = "/users/" + elUser.id + "/edit" 
        res.redirect(guardado);
        },
        deleteUser: (req, res) => {
            borrarUser(req.params.id);
            res.redirect("/");
        },
    };
    
    module.exports = controller