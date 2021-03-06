var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {

        let id = req.params.id;
        console.log(req);
        var product = new Product(
        {
            _id :id,
            name: req.body.name,
            price: req.body.price,
            count: req.body.count,
            description: req.body.description,
            picture: req.body.picture
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Game added successfully')
    })
};


exports.product_all = function (req, res) {
    Product.find(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};


exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};