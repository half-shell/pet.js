var Sequelize = require('sequelize');

module.exports = {
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
};
