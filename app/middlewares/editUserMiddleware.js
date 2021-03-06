const express = require('express');
const model = require('../model/model');
const path = require('path');
const bcrypt = require('bcryptjs');
const axios = require('axios');

function editUserMiddleware (req, res, next) {
    // Si existe algo en la prop user de session
	if(req.session.user != undefined) {
        return next();
	}
    return res.redirect('/users/register');
    

};

module.exports = editUserMiddleware;