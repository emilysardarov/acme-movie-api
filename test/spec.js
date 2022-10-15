const app = require('supertest')(require('../app'));
const {
  conn,
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require('../db');
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

  describe('Movies', () => {
    it('there are 4 movies', async () => {
      const movies = await Movie.findAll();
      expect(movies.length).to.equal(4);
    });
  });

  describe('Actors', () => {
    it('there are 5 actors', async () => {
      const actors = await Actor.findAll();
      expect(actors.length).to.equal(5);
    });
  });
});
