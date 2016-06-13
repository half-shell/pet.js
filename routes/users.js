var router = require('express').Router();

module.exports = function(api){
    router.get('/', function(req, res, next){
        res.send('Welcome the the users.');
    });
    return router;
}
