var Sequelize = require('sequelize');

module.exports = new Sequelize('pet.js', 'root', 'toor', {
    host: 127.0.0.1,
    dialect: mariadb,
    port: 3006
});