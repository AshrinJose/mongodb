const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route');

//initialize our express app
const app = express();

//connectiong to db
let dev_db_url = 'mongodb://127.0.0.1:27017/productsTutorial';
let mongoDb = process.env.MONGOBD_URI || dev_db_url;
mongoose.connect(dev_db_url, function (err) {
    if (err) throw err;
    console.log('Successfully connected');

});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDb connection error'));

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//configuring url
app.use('/products', product);


//declaring a port number and telling our express app to listen to that port
let port = 3003;
app.listen( port, () => {
    console.log("server is up and running on port number "+ port);
});