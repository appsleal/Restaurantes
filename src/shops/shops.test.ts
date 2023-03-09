const request = require('supertest')
const app = require('../index');

describe('Test GET /', () => {
    test('It should respond 200 success', async () => {
        const response = await request(app)
        .get('/shops')
        .expect('Content-Type',/json/)
        .expect(200);
    });
});