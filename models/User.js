var Sequelize = require('sequelize');

module.exports = {
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
};
