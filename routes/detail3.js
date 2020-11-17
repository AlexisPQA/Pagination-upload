var express = require('express');
var router = express.Router();
const detailController3 = require('../controllers/detail3Controller'); 

router.get('/', detailController3.index);

module.exports = router;