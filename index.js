var express = require('express');
var api = express();
var DEFAULT_PORT = '3000';


api.get('/contacts', function(req, res, next){
    res.send([]);
});

api.get('/', function(req, res, next){
    res.send('Hello world');
});

api.post('/contacts/:name', function(req, res, next){
    if(req.params.name == 'exists')
        return res.sendStatus(403);
    res.send();
});

api.post('/contacts', function(req, res, next){
    res.send();
});

api.put('/contacts/:name/:new', function(req, res, next){
    res.send();
});

api.delete('/contacts/:name', function(req, res, next){
    res.send();
});



var port = process.env.PORT || DEFAULT_PORT;
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;
