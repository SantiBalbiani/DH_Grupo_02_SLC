const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const { check, validationResult, body } = require('express-validator');


let diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, 'app', '../../public/images/users'));
	},
	filename: function (req, file, cb) {
		let finalName = file.originalname  /*+ path.extname(file.originalname)*/;
		cb(null, finalName);
	}
});

let upload = multer({ storage: diskStorage })

const messages = 
function (req, res, next) {
  console.log(req.originalUrl);

     
      let err = validationResult(req);

            if (!err.isEmpty()){
              res.render('userForm', {title2: 'SLC: Crear Usuario',ers: err.errors});
                
            }

   //   res.render('editUser', {title2: "Modificar mis Datos",  msg: "Datos actualizados!"} );
    

  /*   if (isSavingPrd.test(req.originalUrl))
    {
      res.render('editProduct', {title2: "detalle de producto", msg: "Producto guardado con éxito!"} );
    } */
    console.log("No hay errores");
    next();
  };

//************ Middlewares ************
const editUserMiddleware = require('../middlewares/editUserMiddleware');
const buynotLogged = require('../middlewares/buynotLogged');  

/* GET users listing. */
router.get('/', userController.getUsers);
router.post('/login',buynotLogged, userController.logIn);
router.get('/create', userController.createUser);
router.get('/register', userController.register);
router.get('/logout', userController.logOut);
router.get('/userProfile/:id', userController.profile)
router.get('/:id', userController.getUser);
router.get('/:id/edit', editUserMiddleware, userController.editUser);
router.post('/', upload.single('avatarName'), [check('password').not().isEmpty().isLength({min: 4}).withMessage( 'La contraseña debe tener mínimo 4 caracteres.'),  check("email").isEmail().withMessage('Ingresar un email válido.')],  messages  , userController.saveUser);
router.put('/:id/edit',upload.single('avatarName'), userController.saveChanges);
router.delete('/:id', userController.deleteUser);


module.exports = router;


