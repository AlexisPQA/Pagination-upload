var express = require('express');
var router = express.Router();
const groceriesController = require('../controllers/groceriesController'); 

router.get('/', groceriesController.index);

module.exports = router;