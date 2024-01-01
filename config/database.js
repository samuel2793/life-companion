// config/database.js

// Importa Sequelize
const { Sequelize } = require('sequelize');

// Configura una nueva instancia de Sequelize para conectar con tu base de datos MySQL
const sequelize = new Sequelize('life_companion_database', 'life_companion_user', 'life_companion_user', {
    host: 'localhost',  // Asegúrate de que 'localhost' sea correcto para tu configuración
    dialect: 'mysql'    // Indica que vamos a usar MySQL
});

module.exports = sequelize;
