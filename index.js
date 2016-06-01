var express = require('express');
var api = express();
var DEFAULT_PORT = '3000';


api.use(express.static('public'));

api.get('/api', function(req, res, next){
    res.send('Hello world');
});

api.get('/api/contacts', function(req, res, next){
    res.send([]);
});

api.post('/api/contacts/:name', function(req, res, next){
    if(req.params.name == 'exists')
        return res.sendStatus(403);
    res.send();
});

api.post('/api/contacts', function(req, res, next){
    res.send();
});

api.put('/api/contacts/:name/:new', function(req, res, next){
    res.send();
});

api.delete('/api/contacts/:name', function(req, res, next){
    res.send();
});



var port = process.env.PORT || DEFAULT_PORT;
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;
