import request from 'supertest';
import app from '../src/app';
import db from '../src/database/database';

beforeEach(async () => {
  await db('users').truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe('ClassesController', () => {
  it('should be able to create a new class', async () => {
    const response = await request(app)
      .post('/classes')
      .send({
        name: 'Julio Cesar',
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
});
