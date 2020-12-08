const books = require('../models/book.model')

exports.index = (req, res, next) => {
	books.find().then(function(book){
		//console.log(book)
		res.render('detail/detail', {book:book});
	})
	
};

exports.detail = (req,res,next) => {
	const id = req.params.id
	books.findById(id, function (err, book) {
		if (err){
			console.log('error')
		}else{
			console.log(book)
			res.render('detail/detail', {book:book});
		}
	});
}