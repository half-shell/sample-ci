var api = require('../index');

beforeEach(function(){
    api.models.contacts = [];
    api.models.contacts.push({
        name: 'exists'
    });

    require('./contacts.specs');
});
