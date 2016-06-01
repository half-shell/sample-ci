var express = require('express');
var api = express();
var DEFAULT_PORT = '3000';


api.use(express.static('public'));

require('./model')(api);
require('./methods')(api);

var port = process.env.PORT || DEFAULT_PORT;
console.log('Server started on port ' + port);
api.listen(port);

module.exports = api;
