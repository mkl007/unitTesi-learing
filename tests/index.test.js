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


// tests/index.test.js
const request = require('supertest');
const { app } = require('../index'); // Assuming your Express app is exported from index.js

describe('GET /user', () => {
  test('responds with json', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'john' });
  });
});

// In your index.js or wherever you're starting your server
const { app } = require('./app'); // Import your Express app
const server = app.listen(3001, () => {
  console.log('Server connected');
});

// Ensure to close the server after tests
afterAll(() => {
  server.close();
});
