const db = require ("../database/models/");
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;

const getValues = ( field, value, entity) => {

    entity
        .findAll({
            where: { [field]: value},
            raw : true,
        })
        .then( result => {
            console.log(result);
            return result;
        })
        .catch( err => console.log(err));
}

const controller = {
	index: (req, res) => {
            Products
                .findAll({
                    attributes: ["idCategory", "createdAt"],
                    where: { idCategory: req.params.idCat }
                })
                .then(result => {
                    return res.json(result);
                }).catch(error => res.json(error));
            },
    allTheCategories: (req, res) =>{ 
               Categories
                 .findAll()
                    .then(result => {
                        return res.json(result);
                    })
                    .catch(error => res.json(error));
	
        },
        allTheProducts:   (req, res) =>{
         Products
        .findAll()
        .then(result => {
            return res.json(result);
        }).catch(error => res.json(error));
    },
}



module.exports = controller;