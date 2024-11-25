const request = require('supertest');
const app = require('../server');  // Assuming server.js is your entry point

describe('POST /api/register', () => {
  it('should register a new user successfully', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ email: 'testuser@example.com', password: 'password123', role: 'user' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
  });

  it('should return an error if user already exists', async () => {
    // Register a user first
    await request(app)
      .post('/api/register')
      .send({ email: 'testuser@example.com', password: 'password123', role: 'user' });

    const response = await request(app)
      .post('/api/register')
      .send({ email: 'testuser@example.com', password: 'password123', role: 'user' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User already exists');
  });
});
