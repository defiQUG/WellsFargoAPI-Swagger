const request = require('supertest');
const app = require('../endpoint');

describe('POST /wire-payment', () => {
  it('should validate request body and return 400 for invalid data', async () => {
    const response = await request(app)
      .post('/wire-payment')
      .send({ destinationAccount: '123', amount: -100, currency: 'USD' });
    expect(response.statusCode).toBe(400);
  });

  it('should handle valid request', async () => {
    const response = await request(app)
      .post('/wire-payment')
      .send({ destinationAccount: '123456789', amount: 100, currency: 'USD' });
    expect(response.statusCode).toBe(200);
  });
});