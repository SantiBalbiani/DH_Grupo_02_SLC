const db = require ("../database/models/");
const Masterusers = db.masterusers;

const controller = {
	index: (req, res) => {
	Masterusers
        .findAll({
            attributes: ["id", "name", "email" ]
        })
        .then(function(masterusers) {
            for (let i=0; i < masterusers.length; i++) {
                masterusers[i].setDataValue("detail", "http://localhost:3030/api/users/" + masterusers[i].id)
            }
            let result = {
                meta: {
                status: 200,
                total: masterusers.length,   
                url: "/api/users",
                href: "http://localhost:3030/api/users",
                

                },
                data: masterusers
            };
        
            return res.json(result);

        }).catch(error => res.json(error));
    },
    find:  (req, res) => {
        Masterusers
            .findByPk(req.params.id,
                {
                    attributes: ["id", "name", "surname", "gender", "email", "city", "cp", "province", "avatarName" ]
                })
            .then(masterusers => {
                let userDetail = {
                    meta: {
                    status: 200,
                    },
                    data: {
                    ...masterusers.toJSON(),
                    imagenUrl: "http://localhost:3030/images/users/"  + masterusers.avatarName, 

                    }
                }
				return res.json (userDetail);
    
            }).catch(error => res.json(error));
        }, 
            findUserCookie:  (req, res) => {
                Masterusers
                    .findByPk(req.params.id)
                    .then(masterusers => {
                        let userDetail = {
                            meta: {
                            status: 200,
                            },
                            data: {
                            ...masterusers.toJSON(),
                            imagenUrl: "http://localhost:3030/images/users/"  + masterusers.avatarName, 
        
                            }
                        }
                        return res.json (userDetail);
            
                    }).catch(error => res.json(error));
                }, 

                allUsers: (req, res) => {
                    Masterusers
                    .findAll({attributes: ["id", "name", "surname", "state", "createdAt"]})
                    .then(result => {
                        return res.json(result);
                }).catch(error => res.json(error));
            },


};
module.exports = controller

