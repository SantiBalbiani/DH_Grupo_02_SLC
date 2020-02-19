const fs = require('fs');
const path = require('path');
const m = require("../model/model");
const bcrypt = require('bcryptjs');
const db = require ("../database/models/");
const Masterusers = db.masterusers;



const fpath = path.join(__dirname, '../data/users.json');

    const controller = {
        getUsers: (req, res) => {
            Masterusers
			.findAll(
                {
                where: {
                    state:1
                }
                })
			.then(masterusers => {
				return res.render('users', { 
					title2: 'Todos los Usuarios',
					masterusers
				});
			})
			.catch(error => res.send(error));
                //let allUsers = m.loadFile(fpath); 
            //res.render('users', {title2: 'Todos los Usuarios', users: allUsers } );
        },
        getUser: (req, res) => {
            Masterusers
			.findByPk(req.params.id)
			.then(masterusers => {
				return res.render('userDetail', { 
					title2: `Detalle de ${masterusers.name}`,
					masterusers
				});
			})
			.catch(error => res.send(error));
	
	
		
            // ya estaba con //let html = readHTML('productDetail');
           // let allUsers = m.loadFile(fpath);
            //elUser = m.getData(allUsers, req.params.id);
            // ya estaba con ////allUsers.find( usr => usr.userId == req.params.userId )
            //elUser == undefined? res.render('notFound', {msg:"Usuario Inexistente"}):
            //res.render('userDetail', {title2: 'Detalle del Usuario', user: elUser});
        },
        // createUser: (req, res) => {
        //     //let html = readHTML('productCart');
        //     res.render('userAdd', {title2: 'SLC: Crear Usuario'});
        // },
        createUser: (req, res) => {
            //let html = readHTML('productCart');
            res.render('userForm', {title2: 'SLC: Crear Usuario', ers: undefined});
        },
        editUser: (req, res) => {
            Masterusers
			.findByPk(req.params.id)
			.then(masterusers => {
				return res.render('editUser', { 
                    title2: 'Editar Usuario',
                    msg:'Modifique datos y presione guardar',
					masterusers
				});
			})
			.catch(error => res.send(error));

        //ya estaba//	let html = readHTML('register');
        //let allUsers = m.loadFile(fpath);
        //ya estaaba// elUser = m.getData(allUsers, req.params.id);
        //elUser = allUsers.find( usr => usr.id == req.params.id );
        //res.render('editUser', { user: elUser, title2: 'Editar Usuario', msg:'Modifique datos y presione guardar'});
        },


        saveUser: (req, res) => {
            Masterusers
			.create(req.body)
			.then(() => res.redirect('/users'))
		.catch(error => res.send(console.log(error)));

            //req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 11);

            //let newUser = {
            //    id: m.genId(fpath),
            //    ...req.body,
            //    image: req.file.filename,
            //}
            //m.create(newUser, fpath);
            
            //res.render('register', {title2: 'SLC: Registro', msg: "Usuario creado con éxito! :) Ingresá con tu email y contraseña"});
          //  res.redirect('/');
        },
        saveChanges: (req, res) => {
            Masterusers
			.update(req.body, {
				where: {
					id: req.params.id
						}
		})
		.then(() => res.redirect('/'))
		.catch(error => res.send(error));

        //ya estaba//	let html = readHTML('productAdd2');
        
        //let allUsers = m.loadFile(fpath);
        //oldUser = m.getData(allUsers, req.params.id);
        //let file = 'file';
        //let image;

        //(req.hasOwnProperty(file))?  image = req.file.filename : image = oldUser.image;
        
        //let elUser = {
		//	id: parseInt(req.params.id),
		//	...req.body,
		//	image: image,
        //};
        
        //(req.body.contrasena == '')?  elUser.contrasena = oldUser.contrasena : elUser.contrasena =  bcrypt.hashSync(req.body.contrasena, 11);

		//m.saveChanges(elUser, fpath);
        //ya estaba// let guardado = "/users/" + user.id + "/edit";

        //res.render('editUser', { title2: "Modificar mis Datos",  msg: "Datos actualizados!", elUser});


        //res.redirect(guardado);
        },
        deleteUser: (req, res) => {
            Masterusers
			.update (
				{state: 0},
				{where: { id: req.params.id }}
				)
			.then(
				res.redirect("/users")
			)
			.catch(error => res.send(error));

            //m.delete_(req.params.id, fpath);
            //res.redirect("/");
        },
        logIn:(req, res) => {
        
        let elUser = m.find_("email", req.body.email, fpath);
        
        if (elUser != undefined){
        
        let logSuccessfull = bcrypt.compareSync( req.body.contrasena , elUser.contrasena);
        
            if (logSuccessfull) {
                req.session.user = elUser;

                if (req.body.recordar) {
					res.cookie('user', bcrypt.hashSync(elUser.id.toString(), 12), { maxAge: 180000});
				}
                res.locals.logged = true;
                res.locals.user = elUser;
                res.render('userProfile', {title2: "Bienvenido " + elUser.nombre + "!", elUser});
               // res.render('editUser', {title2: "Bienvenido " + elUser.nombre + "!", msg:'Acceso exitoso!', elUser})
            }else{
                res.render('register', {title2: 'SLC: Registro', msg: "Su contraseña es incorrecta. Intente de nuevo"});
            }
        }else{
            res.render('register', {title2: 'SLC: Registro', msg: "Usuario y/o contraseña inexistentes"});
        }
        },

        register: (req, res) => {
            //	let html = readHTML('register');
                res.render('register', {title2: 'SLC: Registro', msg: "Hola :) Ingresá con tu email y contraseña"});
            },

        logOut: (req, res) => {
		req.session.destroy();
		res.cookie('user', null, { maxAge: -1 });
		return res.redirect('/');
        },
        
        profile: (req, res) => {
            Masterusers
			.findByPk(req.params.id)
			.then(masterusers => {
                return masterusers== undefined? res.render('notFound', {msg:"Usuario Inexistente"}):
                res.render('userProfile', { 
					title2: `Perfil de ${masterusers.name}`,
					masterusers
				});
			})
            .catch(error => res.send(console.log(error)));
            
            //let allUsers = m.loadFile(fpath);
            //elUser = m.getData(allUsers, req.params.id);
            //var user = elUser;
            //ya estaba// allUsers.find( usr => usr.userId == req.params.userId )
            //elUser == undefined? res.render('notFound', {msg:"Usuario Inexistente"}):
            //res.render('userProfile', {title2: 'Perfil de' + user.nombre,  user});
        }
    };
    
    module.exports = controller


    