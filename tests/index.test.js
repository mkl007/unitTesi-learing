// const request = require('supertest')
// const { app } = require('../index.js')

// describe('GET /users', function () {
//     it('responds with json', async function () {
//         const response = await request(app)
//             .get('/user')
//             .set('Accept', 'application/json');
//         console.log(response.headers); 
//         const show = response.headers["content-type"]
//         expect(response.headers["content-type"]).toMatch(/json/i); 
//         expect(response.status).toEqual(200);
//         expect(response.body.name).toEqual('john');
//     });
// });


const request = require('supertest');
const { app } = require('../index');

describe('GET /user', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3001, () => {
      console.log('connected');
    });
  });

  afterAll(done => {
    server.close(done);
  });

  it('responds with json', async () => {
    const response = await request(server).get('/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'john' });
  });
});
