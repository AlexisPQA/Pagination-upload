var express = require('express');
var router = express.Router();
const registeredController = require('../controllers/registeredController'); 

router.get('/', registeredController.index);

module.exports = router;