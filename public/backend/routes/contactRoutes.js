// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST: Create a new contact
router.post('/contacts', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET: Get all contacts
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
