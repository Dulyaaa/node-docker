const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    accountNo: {
        type: String,
    },
    payDate: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;