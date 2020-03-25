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
                    attributes: ["idCategory"],
                    where: { idCategory: req.params.idCat }
                })
                .then(result => {
                    return res.json(result);
                }).catch(error => res.json(error));
            }   
            
        

      //  var prods = getValues( "idCategory", req.params.idCat, Products);
       
        
        
 //       return res.json(prods);
	
}



module.exports = controller;