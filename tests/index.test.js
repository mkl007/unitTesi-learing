const request = require('supertest');
const { app, server } = require('../index.js'); // Import both `app` and `server`

describe('GET /users', function () {
  it('responds with json', async function () {
    const response = await request(app)
      .get('/user')
      .set('Accept', 'application/json');
    expect(response.headers["content-type"]).toMatch(/json/i); 
    expect(response.statusCode).toEqual(200);
    expect(response.body.name).toEqual('john');
  });

  afterAll(function (done) {
    server.close(done);
  });
});
