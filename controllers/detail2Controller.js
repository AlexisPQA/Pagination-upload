const detail2Model = require('../models/detail2Model');

exports.index = (req, res, next) => {
    const detail = detail2Model.list();
    res.render('detail/detail', {detail});
};