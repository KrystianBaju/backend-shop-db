var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    _id : {type: Number/*,required: true*/},
    name: {type: String/*, required: true*/, max: 100},
    price: {type: Number/*, required: true*/},
    count: {type : Number/*, required:true*/},
    description: {type: String/*, required: true,*/},
    picture: {type: String,}
});







module.exports = mongoose.model('Product', ProductSchema);