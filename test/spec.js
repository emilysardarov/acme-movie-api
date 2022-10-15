const app = require('supertest')(require('../app'));
const { conn, syncAndSeed } = require('../db');
const { expect } = require('chai');

describe('quick test', () => {
  beforeEach(async () => {
    await syncAndSeed();
  });
  describe('home page', () => {
    it('passes test', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.contain('Hello world');
    });
  });
});
