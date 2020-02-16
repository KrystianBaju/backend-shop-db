var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');


router.post('/create/:id', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;