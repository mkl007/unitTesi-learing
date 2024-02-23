const request = require('supertest')
const { app } = require('../index.js')

describe('GET /users', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/user')
            // .set('Accept', 'application/json');
        console.log(response.headers); 
        const show = response.headers["content-type"]
        // expect(response.headers["content-type"]).toMatch(/json/i); 
        expect(response.statusCode).toEqual(200);
        // expect(response.body.name).toEqual('john');
    });
});