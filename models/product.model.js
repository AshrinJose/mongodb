const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: String, required: false},
    category:{type:String, required:false}
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);