const fs = require('fs');
const path = require('path');
const m = require("../model/model");
const bcrypt = require('bcryptjs');

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
        // createUser: (req, res) => {
        //     //let html = readHTML('productCart');
        //     res.render('userAdd', {title2: 'SLC: Crear Usuario'});
        // },
        createUser: (req, res) => {
            //let html = readHTML('productCart');
            res.render('userForm', {title2: 'SLC: Crear Usuario'});
        },
        editUser: (req, res) => {
        //	let html = readHTML('register');
        let allUsers = m.loadFile(fpath);
        //elUser = m.getData(allUsers, req.params.id);
        elUser = allUsers.find( usr => usr.id == req.params.id );
        res.render('editUser', { user: elUser, title2: 'Editar Usuario', msg:'Modifique datos y presione guardar'});
        },
        saveUser: (req, res) => {

            req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 11);

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
        
        let allUsers = m.loadFile(fpath);
        oldUser = m.getData(allUsers, req.params.id);
        let file = 'file';
        let image;

        (req.hasOwnProperty(file))?  image = req.file.filename : image = oldUser.image;
        
        let elUser = {
			id: parseInt(req.params.id),
			...req.body,
			image: image,
        };
        
        (req.body.contrasena == '')?  elUser.contrasena = oldUser.contrasena : elUser.contrasena =  bcrypt.hashSync(req.body.contrasena, 11);

		m.saveChanges(elUser, fpath);
        //let guardado = "/users/" + user.id + "/edit";

        res.render('editUser', { title2: "Modificar mis Datos",  msg: "Datos actualizados!", elUser});


        //res.redirect(guardado);
        },
        deleteUser: (req, res) => {
            m.delete_(req.params.id, fpath);
            res.redirect("/");
        },
        logIn:(req, res) => {
        
        let elUser = m.find_("email", req.body.email, fpath);
        
        if (elUser != undefined){
        
        let logSuccessfull = bcrypt.compareSync( req.body.contrasena , elUser.contrasena);
        
        logSuccessfull? res.render('editUser', {title2: "Bienvenido " + elUser.nombre + "!", msg:'Acceso exitoso!', elUser}) : res.render('register', {title2: 'SLC: Registro', msg: "Su contraseña es incorrecta. Intente de nuevo"});
        }else{
            res.render('register', {title2: 'SLC: Registro', msg: "Usuario y/o contraseña inexistentes"});
        }
        },
        register: (req, res) => {
            //	let html = readHTML('register');
                res.render('register', {title2: 'SLC: Registro', msg: "Hola :) Ingresá con tu email y contraseña"});
            },
    };
    
    module.exports = controller

