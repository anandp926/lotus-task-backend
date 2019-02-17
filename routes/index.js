var express = require('express');
var router = express.Router();

var db = require('../root/queries');

router.get('/lotus/suppliers', db.getAllSuppliers);
router.get('/lotus/products', db.getAllProducts);
router.get('/lotus/customers', db.getAllCustomer);
router.post('/lotus/customers', db.createNewCustomer)

module.exports = router;
