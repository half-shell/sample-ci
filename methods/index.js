module.exports = function(api){
    var router = require('./contacts')(api);
    api.use('/api/contacts/', router);
}
