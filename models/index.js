var sequelize = require('./sequelize');

var Pet = require('./Pet');
var Post = require('./Post');
var Comment = require('./Comment');
var User = require('./User');

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

Pet.belongsTo(User);
User.hasMany(Pet);

Post.hasMany(Comment);

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
