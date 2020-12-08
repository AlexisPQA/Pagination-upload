const books = require('../models/book.model')

exports.index = (req, res, next) => {
	books.find().then(function(book){
		res.render('groceries/groceries', {groceries:book});
	})
};

exports.search = (req, res, next) => {
	console.log(req.query)
	books.find({title: req.query.q}).then(function(book){
		res.render('groceries/groceries', {groceries:book});
	})
}

exports.VHVN = (req, res, next) => {
	books.find({cate: "Văn học Việt Nam"}).then(function(book){
		res.render('groceries/groceries', {groceries:book});
	})
}

exports.PT = (req, res, next) => {
	books.find({cate: "Phép thuật"}).then(function(book){
		res.render('groceries/groceries', {groceries:book});
	})
}