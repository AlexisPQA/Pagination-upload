var express = require('express');
var router = express.Router();
const detailController1 = require('../controllers/detail1Controller'); 

router.get('/', detailController1.index);

module.exports = router;