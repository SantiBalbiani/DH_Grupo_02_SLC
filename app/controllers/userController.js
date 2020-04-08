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
	
	
		
        },
        createUser: (req, res) => {
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

        },


        saveUser: (req, res) => {
            req.body.password = bcrypt.hashSync(req.body.password, 11);
            data = {
                avatarName: req.file.filename,
                ...req.body,
                createdAt: new Date(),
            }
            Masterusers
			.create(data)
			.then(() => res.redirect('/users'))
		.catch(error => res.send(console.log(error)));

        },
        saveChanges: (req, res) => {
           req.body.password = bcrypt.hashSync(req.body.password, 11);
           
           if (req.file) {
            data = {
                avatarName: req.file.filename,
                ...req.body
            }
           }else {
            data = {
                avatarName: req.body.avatarName,
                ...req.body
            }
           }
           
          
            Masterusers
			.update(data, {
				where: {
					id: req.params.id
						}
		})
		.then(() => res.redirect('/'))
		.catch(error => res.send(error));

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

        },
        logIn:(req, res) => {
        
            Masterusers
			.findAll({where: {email: req.body.email}})
			.then(masterusers => {
				
			
          let elUser = masterusers[0].dataValues;
          elUser.cart = [];
        if (elUser != undefined){
        
        let logSuccessfull = bcrypt.compareSync( req.body.contrasena , elUser.password);
        
            if (logSuccessfull) {
                req.session.user = elUser;
                if (req.session.cart.length < 1){
                    req.session.cart = [];
                    res.cookie('cart', '');
                }else{
                    
                    res.cookie('cart', JSON.stringify(req.session.cart), { maxAge: 180000});
                }
                
                if (req.body.recordar) {
					res.cookie('user', bcrypt.hashSync(elUser.id.toString(), 12), { maxAge: 180000});
				}
                res.locals.logged = true;
                res.locals.user = elUser;
                var masterusers = elUser;
                
                res.render('userProfile', {title2: "Bienvenido " + elUser.name + "!", elUser, masterusers});
            }else{
                return res.render('register', {title2: 'SLC: Registro', msg: "Su contraseña es incorrecta. Intente de nuevo"});
            }
        }else{
            return res.render('register', {title2: 'SLC: Registro', msg: "Usuario y/o contraseña inexistentes"});
        }

    })
    .catch(error => res.send(error));
        },

        register: (req, res) => {
                return res.render('register', {title2: 'SLC: Registro', msg: "Hola :) Ingresá con tu email y contraseña"});
            },

        logOut: (req, res) => {
		req.session.destroy();
        res.cookie('user', null, { maxAge: -1 });
        res.cookie('cart', null, { maxAge: -1 });
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
            
        },
       
    };
    
    module.exports = controller


    