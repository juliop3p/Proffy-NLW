import request from 'supertest';
import app from '../src/app';
import db from '../src/database/database';

beforeEach(async () => {
  await db('classes').truncate();
  await db('users').truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe('ClassesController', () => {
  it('should be able to create a new class', async () => {
    const user_ids = await db('users').insert({
      name: 'Julio',
      lastname: 'Cesar',
      email: 'julio@gmail.com',
      password_hash: '123456',
    });

    const response = await request(app)
      .post('/classes')
      .send({
        name: 'Julio Cesar',
        user_id: user_ids[0],
        avatar:
          'https://avatars0.githubusercontent.com/u/52512483?s=400&u=2aac534a0f02106801ab4179f3bf2934b8142944&v=4',
        whatsapp: '5513981418755',
        bio: 'Focusing on get better every day.',
        subject: 'Programação',
        cost: 80,
        schedule: [
          { week_day: 1, from: '8:00', to: '12:00' },
          { week_day: 3, from: '10:00', to: '18:00' },
          { week_day: 4, from: '8:00', to: '12:00' },
        ],
      });

    expect(response.status).toBe(201);
  });

  it('should not be able to create a class without a field', async () => {
    const response = await request(app)
      .post('/classes')
      .send({
        avatar:
          'https://avatars0.githubusercontent.com/u/52512483?s=400&u=2aac534a0f02106801ab4179f3bf2934b8142944&v=4',
        whatsapp: '5513981418755',
        bio: 'Focusing on get better every day.',
        subject: 'Math',
        cost: 80,
        schedule: [
          { week_day: 1, from: '8:00', to: '12:00' },
          { week_day: 3, from: '10:00', to: '18:00' },
          { week_day: 4, from: '8:00', to: '12:00' },
        ],
      });

    expect(response.status).toBe(400);
  });

  it('should be able to list classes', async () => {
    const filters = {
      subject: 'Math',
      week_day: 1,
      time: '10:00',
    };

    const response = await request(app).get('/classes').query(filters);

    expect(response.status).toBe(200);
  });

  it('should not be able to list without a filter', async () => {
    const filters = {
      week_day: 1,
      time: '10:00',
    };

    const response = await request(app).get('/classes').query(filters);

    expect(response.status).toBe(400);
  });
});
