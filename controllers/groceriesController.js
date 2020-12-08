const books = require('../models/book.model')
ItemPerPage = 9
// exports.listbook = async(pageNumber,ItemPerPage) =>{
// 	let listbook = books.paginate({},{
// 		page:pageNumber,
// 		limit:ItemPerPage
// 	});
// 	return listbook
// }
// exports.index = (req, res, next) => {
// 	books.find().then(function(book){
// 		res.render('groceries/groceries', {groceries:book});
// 	})

// };

exports.index = async (req, res, next) => {
	const page = +req.query.page || 1;
	const paginate = await books.paginate({},{
		page:1,
		limit:ItemPerPage,
	});
	res.render('groceries/groceries',{
		groceries: paginate.docs,
		currentPage : paginate.currentPage,
		hasNextPage : paginate.hasNextPage,
		hasPreviousPage : paginate.hasPrevPage,
		nextPage : paginate.nextPage,
		prevPage : paginate.prevPage,
		lastPage : paginate.pageCount,
		ITEM_PER_PAGE: ItemPerPage,
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


exports.pagination = (req, res, next) => {
	console.log(+req.query.page)
	res.render('groceries/groceries', {current :1, nextPage :2});
}

