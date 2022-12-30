import request from 'superagent'
const promptApi = '/api/v1/prompts/'

//READ

//GET api/v1/prompts/
export function getPromptsData() {
  return request
    .get(promptApi)
    .then((response) => {
      const promptData = response.body
      return promptData
    })
    .catch((err) => {
      console.error(err)
    })
}

//GET api/v1/prompts/:id
export function getPromptById(id) {
  return request
    .get(promptApi + id)
    .then((res) => {
      const prompt = {
        prompt: res.body.prompt,
        category: res.body.category,
      }
      return prompt
    })
    .catch((err) => {
      console.error(err)
    })
}

//CREATE

//GET api/v1/prompts/ add?
export function addNewPrompt(newPrompt) {
  return request
    .post(promptApi)
    .send(newPrompt)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error(err)
    })
}

//DELETE

//DELETE api/v1/prompts/
export function removePromptApi(promptId) {
  console.log('hit delete route', promptId)
  return (
    request
      .delete(promptApi + promptId)
      // .send(promptId)
      .then((response) => {
        return response
      })
      .catch((err) => {
        console.error(err)
      })
  )
}

//UPDATE

//api/v1/prompts/edit/:id
export function editPromptApi(prompt, id) {
  console.log('hit update route', id)
  return request
    .patch(`${promptApi}/edit/${id}`)
    .send(prompt)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error(err)
    })
}
