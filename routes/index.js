module.exports = function(api){
    var users = require('./users')(api);
    api.use('/api/users', users);
}
