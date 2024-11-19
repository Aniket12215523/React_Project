const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
