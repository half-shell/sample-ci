var express = require('express');
var api = express();
var DEFAULT_DEFAULT_PORT = '3000';

api.get('/', function(req, res, next){
    res.send("Hello world");
});

var port = proces.env.PORT || DEFAULT_PORT;
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;
