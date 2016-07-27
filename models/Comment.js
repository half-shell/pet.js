var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

module.exports = sequelize.define('comment', {
    id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
    },
    message: {
            type: Sequelize.STRING
    },
    date: {
            type: Sequelize.DATE
    }
});
