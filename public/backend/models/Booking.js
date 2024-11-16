const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    service: String,
    date: String,
    time: String,
    name: String,
    phone: String
});

module.exports = mongoose.model('Booking', bookingSchema);
