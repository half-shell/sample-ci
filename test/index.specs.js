var request = require('supertest');
var api = require('../index');

describe('api', function(){
    it('should return Hello worl on GET /', function(){
        return request(api)
            .get('/')
            .send()
            .expect('Hello foobar');
    })
});
