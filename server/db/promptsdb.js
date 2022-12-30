//config set up so db can access knex and query the database
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

//Reads and returns all the prompt data
function getAllPrompts(db = connection) {
  return db('prompts').select()
}

//Gets one prompt object by id
function getPrompt(id, db = connection) {
  return db('prompts').where({ id }).select().first()
}

//Adds a new prompt object to the database
function addPrompt(newPrompt, db = connection) {
  const { prompt, category } = newPrompt //deconstruct the newPrompt obj
  return db('prompts')
    .insert({ prompt, category }) //insert returns an array with the id number of the new item in the array
    .then(([id]) => {
      return { id, prompt, category } //then at take the id returned from insert, turn it into an index with square brackets and at that index return an object with the new data
      //alternative way to write line 15
      // .then((ids) => {
      //   return { id: ids[0], prompt, category } //with the array returned from insert , insert an object with the id property = to the id array
    })
}

//Deletes a prompt from the database
function delPrompt(promptId, db = connection) {
  return db('prompts').where('id', promptId).del()
}

//Updates a prompt object in the database
function updatePrompt(prompt, id, db = connection) {
  return db('prompts')
    .update({ id: id, prompt: prompt.prompt, category: prompt.category })
    .where({ id })
}

module.exports = {
  getPrompt,
  getAllPrompts,
  addPrompt,
  delPrompt,
  updatePrompt,
}
