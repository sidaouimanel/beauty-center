// public/backend/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définir le schéma de l'utilisateur
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Créer le modèle à partir du schéma
const User = mongoose.model('User', userSchema);

module.exports = User;
