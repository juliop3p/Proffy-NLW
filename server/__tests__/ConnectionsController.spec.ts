import request from 'supertest';
import app from '../src/app';
import db from '../src/database/database';

beforeEach(async () => {
  await db('connections').truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe('ConnectionController', () => {
  it('should be able to create a connection', async () => {
    const response = await request(app)
      .post('/connections')
      .send({ user_id: 1 });

    expect(response.status).toBe(201);
  });

  it('should be able to list the number of connections', async () => {
    const response = await request(app).get('/connections');

    expect(response.status).toBe(201);
  });
});
