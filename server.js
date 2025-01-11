const express = require('express');
const app = express();
const usersRoutes = require('./usersRoutes');

app.use(express.json());

// Utilisation des routes des utilisateurs
app.use('/api/users', usersRoutes);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
