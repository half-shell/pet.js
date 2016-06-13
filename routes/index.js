module.exports = function(api){
    var router = require('./users')(api);
    api.use('/api/users', router);
    return router;
}
