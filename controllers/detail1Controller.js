const detail1Model = require('../models/detail1Model');

exports.index = (req, res, next) => {
    const detail = detail1Model.list();
    res.render('detail/detail', {detail});
};