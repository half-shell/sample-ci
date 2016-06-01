var express = require('express');
var api = express();

api.get('/', function(req, res, next){
    res.send("Hello world");
});

var port = '3000';
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;
