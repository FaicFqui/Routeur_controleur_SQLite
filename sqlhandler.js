const sqlite3 = require('sqlite3').verbose();

// Créer une connexion à la base de données existante
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données', err.message);
    } else {
        console.log('Connexion à la base de données réussie.');
    }
});

module.exports = db;
