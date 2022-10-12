// endpoint testing using superset module
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets the the actual resize endpoint, with the correct URL and proper parameters', async () => {
    const response = await request.get(
      '/api/process?name=fjord&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
});
