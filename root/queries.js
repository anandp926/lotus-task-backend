var promise = require('bluebird');

var options = {
    // Intialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
const config = {
    host: 'localhost',
    port: 5432,
    database: 'lotus',
    user: 'anand',
    password: 'anandp926'
};
var db = pgp(config);

function getAllCustomer(req, res, next) {
    db.any('select * from customer')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Customer'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createNewCustomer(req, res, next) {
    req.body.creditLimit = parseInt(req.body.creditLimit);
    req.body.balance = parseInt(req.body.balance);
    req.body.loyaltyCard = parseInt(req.body.loyaltyCard);
    db.none('insert into customer(Name, phone, email, creditLimit, balance, loyaltyCard)' +
        'values(${Name}, ${phone}, ${email}, ${creditLimit}, ${balance}, ${loyaltyCard})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one customer'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

function getAllProducts(req, res, next) {
    db.any('select * from products')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Products'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAllSuppliers(req, res, next) {
    db.any('select * from supplier')
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved All Supplier'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllSuppliers: getAllSuppliers,
    getAllProducts: getAllProducts,
    getAllCustomer: getAllCustomer,
    createNewCustomer: createNewCustomer,
}