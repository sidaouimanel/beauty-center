// public/backend/routes/authRoutes.js
const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Route pour l'inscription
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

// Route pour la connexion
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Trouver l'utilisateur
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Générer un token JWT
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
});

module.exports = router;
