//set up for route testing
import request from 'supertest' //1. request from supertest da da da
const server = require('../../server') //2. require server
const db = require('../../db/promptsdb') //3. require the db functions your route calls
jest.mock('../../db/promptsdb') //4. mock the functions in db using the filepath required in line above

const testData = [
  { id: 1, prompt: 'test prompt description', category: 'test category' },
  { id: 2, prompt: 'test prompt description', category: 'test category' },
  { id: 3, prompt: 'test prompt description', category: 'test category' },
  { id: 4, prompt: 'test prompt description', category: 'test category' },
  { id: 5, prompt: 'test prompt description', category: 'test category' },
  { id: 6, prompt: 'test prompt description', category: 'test category' },
  { id: 7, prompt: 'test prompt description', category: 'test category' },
  { id: 8, prompt: 'test prompt description', category: 'test category' },
  { id: 9, prompt: 'test prompt description', category: 'test category' },
  { id: 10, prompt: 'test prompt description', category: 'test category' },
  { id: 11, prompt: 'test prompt description', category: 'test category' },
  { id: 12, prompt: 'test prompt description', category: 'test category' },
  { id: 13, prompt: 'test prompt description', category: 'test category' },
]

describe('GET /api/v1/prompts', () => {
  test('gets an array of objects containing prompts data', () => {
    expect.assertions(3)
    db.getAllPrompts.mockImplementation(() => Promise.resolve(testData))
    return request(server)
      .get('/api/v1/prompts')
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBeGreaterThanOrEqual(13)
        expect(res.body[0]).toHaveProperty('prompt', 'test prompt description')
        expect(res.body).toEqual(testData)
      })
  })
  test('returns status 500 error and message if db query fails', () => {
    expect.assertions(2)
    db.getAllPrompts.mockImplementation(() =>
      Promise.reject(new Error('server error message'))
    )
    return request(server)
      .get('/api/v1/prompts')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Sorry, cannot access server')
      })
  })
})
