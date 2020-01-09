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

    