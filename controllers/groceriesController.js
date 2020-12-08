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
		page:page,
		limit:ItemPerPage,
	});
	res.render('groceries/groceries',{
		groceries: paginate.docs,
		currentPage : paginate.currentPage,
		hasNextPage : paginate.hasNextPage,
		hasPreviousPage : paginate.hasPrevPage,
		nextPage : paginate.nextPage,
		prevPage : paginate.prevPage,
		lastPage : paginate.totalPages,
		ITEM_PER_PAGE: ItemPerPage,
	})
};

exports.search =async (req, res, next) => {
	 // books.find({title: req.query.q}).then(function(book){
	 // 	res.render('groceries/groceries', {groceries:book});
	 // })
	 const page = +req.query.page || 1;
	const paginate = await books.paginate({title: req.query.q},{
		page:page,
		limit:ItemPerPage,
	});
	res.render('groceries/groceries',{
		groceries: paginate.docs,
		currentPage : paginate.currentPage,
		hasNextPage : paginate.hasNextPage,
		hasPreviousPage : paginate.hasPrevPage,
		nextPage : paginate.nextPage,
		prevPage : paginate.prevPage,
		lastPage : paginate.totalPages,
		ITEM_PER_PAGE: ItemPerPage,
	})
}

exports.VHVN = (req, res, next) => {
	// books.find({cate: "Văn học Việt Nam"}).then(function(book){
	// 	res.render('groceries/groceries', {groceries:book});
	// })
	const page = +req.query.page || 1;
	const paginate = await books.paginate({cate: "Văn học Việt Nam"},{
		page:page,
		limit:ItemPerPage,
	});
	res.render('groceries/groceries',{
		groceries: paginate.docs,
		currentPage : paginate.currentPage,
		hasNextPage : paginate.hasNextPage,
		hasPreviousPage : paginate.hasPrevPage,
		nextPage : paginate.nextPage,
		prevPage : paginate.prevPage,
		lastPage : paginate.totalPages,
		ITEM_PER_PAGE: ItemPerPage,
	})
}

exports.PT = (req, res, next) => {
	// books.find({cate: "Phép thuật"}).then(function(book){
	// 	res.render('groceries/groceries', {groceries:book});
	// })

	const page = +req.query.page || 1;
	const paginate = await books.paginate({cate: "Phép thuật"},{
		page:page,
		limit:ItemPerPage,
	});
	res.render('groceries/groceries',{
		groceries: paginate.docs,
		currentPage : paginate.currentPage,
		hasNextPage : paginate.hasNextPage,
		hasPreviousPage : paginate.hasPrevPage,
		nextPage : paginate.nextPage,
		prevPage : paginate.prevPage,
		lastPage : paginate.totalPages,
		ITEM_PER_PAGE: ItemPerPage,
	})
}


