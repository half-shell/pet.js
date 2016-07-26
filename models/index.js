var sequelize = require('./sequelize');

var Pet = require('./Pet')(Sequelize);
var Post = require('./Post')(Sequelize);
var Comment = require('./Comment')(Sequelize);
var User = require('./User')(Sequelize);

// Database testing
sequelize.validate().then(function(err){
    if(err) {
        console.warn(err);
    } else {
        console.info('Sequelize is successfuly connected to the database');
    }
});

// Relations
Pet.hasMany(Post);
Pet.hasMany(Pet);
User.hasMany(Pet);

// Syncing
console.info("Syncing database");
sequelize.sync();

// Exporting all models
module.exports = {
    sequelize: sequelize,
    Pet: Pet,
    Post: Post,
    Comment: Comment,
    User: User
};
