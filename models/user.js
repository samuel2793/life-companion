// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la configuración de la conexión a la base de datos

const User = sequelize.define('User', {
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

module.exports = User;
