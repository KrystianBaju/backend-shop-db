
var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); //  routes for the games
var app = express();


var mongoose = require('mongoose');


var dev_db_url = 'mongodb+srv://adminTest:admin8819@shop-game-db-wxjk3.mongodb.net/test?retryWrites=true&w=majority';

var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/games', product);

var port = 3000;

app.listen(port, () => {
    console.log('Server has been run on port:' + port);
});
