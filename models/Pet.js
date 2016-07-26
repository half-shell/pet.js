module.exports = function(Sequelize) {
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
