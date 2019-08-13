var shell = require('shelljs');
var request = require('supertest');
var app = require('./app');

describe('api', () => {
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });

  afterEach(() => {
    shell.exec('npx sequelize db:seed:undo:all')
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  describe('test the root path', () => {
    test('should return 200', () => {
      return request(app).get('/').then(response => {
        expect(response.statusCode).toBe(200)
      });
    });
  });

  describe('test the games index path', () => {
    test('should return 200', () => {
      return request(app).get('/api/v1/games').then(response => {
        expect(response.statusCode).toBe(200)
      });
    });

    test('should return an array of game objects', () => {
      return request(app).get('/api/v1/games').then(response => {
        let games = response.body;

        expect(games.length).toBe(4)
        expect(Object.keys(games[0])).toContain('title')
        expect(Object.keys(games[0])).toContain('price')
        expect(Object.keys(games[0])).toContain('releaseYear')
        expect(Object.keys(games[0])).toContain('title')
      });
    });
  });

  describe('test the games show path', () => {
    test('should return 200', () => {
      return request(app).get('/api/v1/games/1').then(response => {
        expect(response.statusCode).toBe(200)
      });
    });

    test('should return a single game object', () => {
      return request(app).get('/api/v1/games/1').then(response => {
        let game = response.body[0];
        
        expect(Object.keys(game)).toContain('title')
        expect(Object.keys(game)).toContain('price')
        expect(Object.keys(game)).toContain('releaseYear')
        expect(Object.keys(game)).toContain('title')

        expect(response.body[1]).toBe(undefined)
      });
    });
  });
});
