var express = require('express');
var router = express.Router();
const detailController2 = require('../controllers/detail1Controller'); 

router.get('/', detailController2.index);

module.exports = router;