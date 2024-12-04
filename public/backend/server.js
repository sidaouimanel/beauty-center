// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importer le package CORS
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // Importer les routes de réservation

const app = express();
const PORT = 5002; // Choisir un port disponible

// Middleware pour CORS
app.use(cors()); // Autoriser toutes les origines

// Middleware pour parser les JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/beauty-center")

    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err.message);
        console.error('Stack trace:', err.stack);
        process.exit(1); // Arrêter l'application si la connexion échoue
    });

// Utilisation des routes
app.use('/api', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', bookingRoutes); // Utiliser les routes de réservation

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
