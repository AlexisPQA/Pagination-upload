const detail3Model = require('../models/detail3Model');

exports.index = (req, res, next) => {
    const detail = detail3Model.list();
    // Pass data to view to display list of books
    res.render('detail/detail', {detail});
};