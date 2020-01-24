const express = require('express');
const model = require('../model/model');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/users.json');

function userCookie (req, res, next) {
    if (req.cookies.user != undefined){
        req.session.user = model.find_("id", req.cookies.user, userFilePath);
    }
    next();
};

module.exports = userCookie;