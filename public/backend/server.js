// src/server.js (ou index.js)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importer le package CORS
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // Importer les routes de réservation

const app = express();
const PORT = 5002;

// Middleware pour CORS
app.use(cors()); // Autoriser toutes les origines

// Middleware pour parser les JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/beauty-base', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('Failed to connect to MongoDB:', err));

// Utilisation des routes
app.use('/api', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', bookingRoutes); // Utiliser les routes de réservation

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
