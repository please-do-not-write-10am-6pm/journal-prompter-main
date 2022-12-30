import { SET_PROMPTS_PENDING, SET_PROMPTS, SET_ERROR } from '../actions/prompts'

const initialPendingState = true

const pendingReducer = (state = initialPendingState, action) => {
  //const {type, payload} = action - don't need to deconstruct as only using type property
  switch (action.type) {
    case SET_PROMPTS_PENDING:
      return true

    case SET_PROMPTS:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default pendingReducer