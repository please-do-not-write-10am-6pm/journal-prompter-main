import { SET_PROMPT, UPDATE_PROMPT } from '../actions/prompts'

const initialState = {}

const prompt = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PROMPT:
      return payload
    case UPDATE_PROMPT:
      return payload
    default:
      return state
  }
}

export default prompt
