module.exports = function(api){
    var users = require('./users')(api);
    api.use('/api/users', users);

    var posts = require('./posts')(api);
    api.use('/api/posts', posts);

    var pets = require('./pets')(api);
    api.use('/api/pets', pets);

    var comments = require('./comments')(api);
    api.use('/api/comments')(api);
}
