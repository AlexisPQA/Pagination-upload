var express = require('express');
var router = express.Router();
const book = require('../controllers/book.Controller'); 

router.get('/', book.index);
router.get('/:id', book.detail);

module.exports = router;
