var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

module.exports = sequelize.define('pet', {
    id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
    },
    name: {
            type: Sequelize.STRING
    },
    type: {
            type: Sequelize.STRING
    },
    born : {
            type: Sequelize.DATE
    }
});
