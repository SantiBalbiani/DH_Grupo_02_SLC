
const db = require ("../database/models/");
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;
const trxitems = db.trxitems;
const trx = db.trx;
const controller = {
	getAllSells: (req, res) => {
        trxitems
                .findAll()
                .then(result => {
                    return res.json(result);
                }).catch(error => res.json(error));
            },
    getSellsHeaders: (req, res) => {
        trx
                .findAll()
                .then(result => {
                    return res.json(result);
                }).catch(error => res.json(error));
            },   
        
        }

            module.exports = controller;