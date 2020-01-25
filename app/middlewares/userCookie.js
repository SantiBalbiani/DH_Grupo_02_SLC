const express = require('express');
const model = require('../model/model');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/users.json');
const bcrypt = require('bcryptjs');

function userCookie (req, res, next) {
    if (req.cookies.user != undefined){
        // req.cookies.user está hasheado. Compararlo con todos los id de users
        var finded = true;
        data = model.loadFile(userFilePath);
        data.forEach( user => {
            
            finded = bcrypt.compareSync( user.id.toString(), req.cookies.user.toString()  );
            
            if (finded){
                req.session.user = model.find_("id", user.id, userFilePath);
                
                next();
                }
        } );
    }
    next();
};

module.exports = userCookie;