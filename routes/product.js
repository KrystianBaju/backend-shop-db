var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');


router.post('/create/:id', product_controller.product_create);


router.get('/', product_controller.product_all);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/delete/:id', product_controller.product_delete);


module.exports = router;