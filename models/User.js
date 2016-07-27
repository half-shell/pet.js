var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

module.exports = sequelize.define('user', {
    id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
    },
    login: {
            type: Sequelize.STRING
    },
    password: {
            type: Sequelize.STRING
    }
});
