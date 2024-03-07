const mongoose = require('mongoose');

// Product schema definition
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
});

// Create and export the product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
