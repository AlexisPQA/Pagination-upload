require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var hbs = require('express-handlebars')
const hbshelper = require('handlebars-helpers')
const multihelpers = hbshelper()

mongoose.connect(process.env.url, {useNewUrlParser: true, useUnifiedTopology: true})



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registeredRouter = require('./routes/registered');
var loginRouter = require('./routes/login');
var groceriesRouter = require('./routes/groceries');
var booksRouter = require('./routes/books');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine("hbs", hbs({
	extname: "hbs",
	helpers : multihelpers,
	defaultLayout:false,
	layoutsDir : __dirname + "/views/layout/",
	paritalsDir: __dirname + "/views/paritals/",
	runtimeOptions:{
		allowProtoPropertiesByDefault: true,
		allowProtoMethodsByDefault:true,
	},
}))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/registered', registeredRouter);
app.use('/login', loginRouter);
app.use('/groceries', groceriesRouter);
app.use('/book', booksRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
