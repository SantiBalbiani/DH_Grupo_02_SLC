const fs = require('fs');
const path = require('path');
const db = require ("../database/models/");
const Products = db.products;
const Categories = db.categories;
const sequelize = db.sequelize;

const controller = {
    buyProd: (req, res) => {
        return res.render('index', {title2: 'SLC Componentes Electrónicos'} );
    },
    saveCart: (req, res) => {
        return res.render('index', {title2: 'SLC Componentes Electrónicos'} );
    },
};

module.exports = controller;