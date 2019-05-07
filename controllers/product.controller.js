const Product = require('../models/product.model');


exports.test = function (req, res) {
    res.send('Greetings from the test controller !!')
};


exports.product_create = function (req, res) {
    console.log(req.body)
    var productsTable = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            category:req.body.category
        }
    );

    productsTable.save(function (err) {
        if (err) throw err;
        res.send("Product created Successfully");
    })
};