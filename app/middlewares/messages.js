const express = require('express');
const isSavingPrd =  /^(?=.*\bproducts\b)(?=.*\bedit\b)(?=.*\method=PUT\b).*$/gm;
const isSavingUsr =  /^(?=.*\busers\b)(?=.*\bedit\b)(?=.*\method=PUT\b).*$/gm;


const messages = 
function (req, res, next) {

   
  

  /*   if (isSavingPrd.test(req.originalUrl))
    {
      res.render('editProduct', {title2: "detalle de producto", msg: "Producto guardado con éxito!"} );
    } */
   
    next();
  };

  // function userCookieMiddleware (req, res, next) {
  //   res.locals.isLogged = false;
  
  //   if (req.cookies.userCookie || req.session.userId) {		
  //     req.session.userId = req.cookies.userCookie ? req.cookies.userCookie : req.session.userId;
  //     res.locals.isLogged = true;
  //   }
  
  //   next();
  // }
  

  module.exports = messages;
