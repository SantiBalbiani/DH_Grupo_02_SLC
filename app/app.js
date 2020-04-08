var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var transactionsRouter = require('./routes/transactions');
var productsRouter = require('./routes/products');
const methodOverride = require("method-override");
const userCookieMiddleware = require('./middlewares/userCookie');
const localsMiddleware = require('./middlewares/localsMiddleware');
const session = require('express-session');
var apiUsers = require('./routes/apiUsers');
var apiSells = require('./routes/apiSells');
var apiProducts = require('./routes/apiProducts');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secretlala',
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
})

app.use(userCookieMiddleware);
app.use(localsMiddleware);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/transactions',transactionsRouter);
//api
app.use('/api/users', apiUsers);
app.use('/api/products', apiProducts);
app.use('/api/Sells', apiSells);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('notFound', {msg:"La página solicitada no existe."});
  //next(createError(404));
  next();
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
