//config set up to access a test version of knex and database
const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

//import databse functions to test. Can also be import {function name} from 'filepath'
import db from '../promptsdb'

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllPrompts', () => {
  test('returns an array of objects containing journal prompts and categories', () => {
    const expected = {
      id: 1,
      prompt: ' Write a stream-of-consciousness with no clear goal.',
      category: 'Mindfulness',
    }
    expect.assertions(2)
    return db.getAllPrompts(testDb).then((result) => {
      expect(result).toHaveLength(13)
      expect(result[0]).toMatchObject(expected)
    })
  })
})
