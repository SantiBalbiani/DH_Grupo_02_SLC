const fs = require('fs');
const path = require('path');
const m = require("../model/model");

const fpath = path.join(__dirname, '../data/users.json');

    const controller = {
        getUsers: (req, res) => {
            let allUsers = m.loadFile(fpath); 
            res.render('users', {title2: 'Todos los Usuarios', users: allUsers } );
        },
        getUser: (req, res) => {
            //let html = readHTML('productDetail');
            let allUsers = m.loadFile(fpath);
            elUser = m.getData(allUsers, req.params.id);
            //allUsers.find( usr => usr.userId == req.params.userId )
            res.render('userDetail', {title2: 'Detalle del Usuario', user: elUser});
        },
        createUser: (req, res) => {
            //let html = readHTML('productCart');
            res.render('userAdd', {title2: 'SLC: Crear Usuario'});
        },
        editUser: (req, res) => {
        //	let html = readHTML('register');
        let allUsers = m.loadFile(fpath);
        //elUser = m.getData(allUsers, req.params.id);
        elUser = allUsers.find( usr => usr.id == req.params.id );
        res.render('editUser', { user: elUser, title2: 'Editar Usuario', msg:'Modifique datos y presione guardar'});
        },
        saveUser: (req, res) => {
            let newUser = {
                id: m.genId(fpath),
                ...req.body,
                image: req.file.filename,
            }
            m.create(newUser, fpath);
            //guardarUser(newUser);
            res.redirect('/');
        },
        saveChanges: (req, res) => {
        //	let html = readHTML('productAdd2');
        let user = {
			id: parseInt(req.params.id),
			...req.body,
			image: req.file.filename,
		};
		m.saveChanges(user, fpath);
        let guardado = "/users/" + user.id + "/edit";
        res.redirect(guardado);
        },
        deleteUser: (req, res) => {
            m.delete_(req.params.id, fpath);
            res.redirect("/");
        },
    };
    
    module.exports = controller

