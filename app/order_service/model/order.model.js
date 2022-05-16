const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    userId: {
        type: String,
    },
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;