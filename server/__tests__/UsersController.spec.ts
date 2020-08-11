import request from 'supertest';
import app from '../src/app';
import db from '../src/database/database';

beforeEach(async () => {
  await db('users').truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe('UsersController', () => {
  it('should be able to register an user', async () => {
    const response = await request(app).post('/users').send({
      name: 'Julio',
      lastname: 'Cesar',
      email: 'julio@gmail.com',
      password: '123456',
    });

    expect(response.status).toBe(201);
  });

  it('should not be able to register an user without a field', async () => {
    const response = await request(app).post('/users').send({
      lastname: 'Cesar',
      email: 'julio@gmail.com',
      password: '123456',
    });

    expect(response.status).toBe(400);
  });
});
