var express = require('express');
var bodyParser = require('body-parser');
var DEFAULT_PORT = '3000';


var api = express();
api.use(bodyParser.urlencoded({extended: true}));

require('./routes')(api);

var port = process.env.PORT || DEFAULT_PORT;

api.listen(port, function(){
    console.log('Let the magic happen! Server listening on port ' + port);
});

module.exports = api;
