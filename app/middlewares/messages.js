const express = require('express');
const isSavingPrd =  /^(?=.*\bproducts\b)(?=.*\bedit\b)(?=.*\method=PUT\b).*$/gm;
const isSavingUsr =  /^(?=.*\busers\b)(?=.*\bedit\b)(?=.*\method=PUT\b).*$/gm;

const messages = 
function (req, res, next) {
  
   if (isSavingUsr.test(req.originalUrl))
    {
      res.render('editUser', {title2: "Modificar mis Datos",  msg: "Datos actualizados!"} );
    } 

  /*   if (isSavingPrd.test(req.originalUrl))
    {
      res.render('editProduct', {title2: "detalle de producto", msg: "Producto guardado con éxito!"} );
    } */

    next();
  };

  module.exports = messages;
