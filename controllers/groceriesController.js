const groceriesModel = require('../models/groceriesModel');

exports.index = (req, res, next) => {
    const groceries = groceriesModel.list();
    // Pass data to view to display list of books
    res.render('groceries/groceries', {groceries});
};