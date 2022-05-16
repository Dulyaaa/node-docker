const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentAPI = require('./api/payment.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4002;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database connected.');
});

app.route('/').get((req, res) => {
    res.send('CTSE Assignment 3 - Payment Service');
});

app.use('/payment', paymentAPI());

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})