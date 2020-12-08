var express = require('express');
var router = express.Router();
const groceriesController = require('../controllers/groceriesController'); 

router.get('/', groceriesController.index);
router.get('/search', groceriesController.search);
router.get('/VHVN', groceriesController.VHVN);
router.get('/PT', groceriesController.PT);
router.get('/book', groceriesController.index);
module.exports = router;