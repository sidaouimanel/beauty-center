const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Route pour récupérer toutes les réservations
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer une nouvelle réservation
router.post('/bookings', async (req, res) => {
    const { service, date, time, name, phone } = req.body;
    
    const newBooking = new Booking({
        service,
        date,
        time,
        name,
        phone
    });

    try {
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Route pour supprimer une réservation
router.delete('/:id', async (req, res) => {
    const bookingId = req.params.id;
    try {
        const result = await Booking.findByIdAndDelete(bookingId);
        if (result) {
            res.status(200).json({ message: 'Booking deleted successfully' });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete booking', error: err });
    }
});
module.exports = router;
