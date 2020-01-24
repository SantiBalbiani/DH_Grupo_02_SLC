const express = require('express');

const localsMiddleware = (req, res, next)  => {
	res.locals.logged = false;
	if (req.session.user != undefined) {
		res.locals.logged = true;
		res.locals.user = req.session.user;
    };
    console.log('pasé');
	next();
}
module.exports = localsMiddleware;