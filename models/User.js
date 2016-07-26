module.exports = function(Sequelize) {
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
