import {
  addNewPrompt,
  getPromptsData,
  removePromptApi,
  editPromptApi,
  getPromptById,
} from '../apis/promptsApi'

export const SET_PROMPTS = 'SET_PROMPTS'
export const SET_PROMPT = 'SET_PROMPT'
export const SET_PROMPTS_PENDING = 'SET_PROMPTS_PENDING'
export const SET_ERROR = 'SET_ERROR'
export const ADD_PROMPT = 'ADD_PROMPT'
export const DEL_PROMPT = 'DEL_PROMPT'
export const UPDATE_PROMPT = 'UPDATE_PROMPT'

//READ

export const setPrompts = (prompts) => {
  return {
    type: SET_PROMPTS,
    payload: prompts,
  }
}

export const setPrompt = (prompt) => {
  return {
    type: SET_PROMPT,
    payload: prompt,
  }
}

export function fetchPrompts() {
  return (dispatch) => {
    dispatch(setPromptsPending())
    return getPromptsData()
      .then((prompts) => {
        dispatch(setPrompts(prompts))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchPrompt(id) {
  return (dispatch) => {
    console.log('action', id)
    return getPromptById(id)
      .then((prompt) => {
        dispatch(setPrompt(prompt))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

//UPDATE

export function updatePrompt(prompt) {
  return {
    type: UPDATE_PROMPT,
    payload: prompt,
  }
}

export function editPrompt(prompt, id) {
  return (dispatch) => {
    return editPromptApi(prompt, id)
      .then(() => {
        console.log('action', prompt)
        dispatch(updatePrompt(prompt))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

//CREATE

export function addPrompt(newPrompt) {
  return {
    type: ADD_PROMPT,
    payload: newPrompt,
  }
}

export function savePrompt(newPrompt) {
  return (dispatch) => {
    return addNewPrompt(newPrompt)
      .then(() => {
        // dispatch(postPrompt(prompt))
        dispatch(addPrompt(newPrompt))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

//DELETE

export const deletePrompt = (promptId) => {
  return {
    type: DEL_PROMPT,
    payload: promptId,
  }
}

export function removePrompt(promptId) {
  return (dispatch) => {
    return removePromptApi(promptId)
      .then(() => {
        dispatch(deletePrompt(promptId))
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

//HELPER ACTIONS

export function setPromptsPending() {
  return {
    type: SET_PROMPTS_PENDING,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
