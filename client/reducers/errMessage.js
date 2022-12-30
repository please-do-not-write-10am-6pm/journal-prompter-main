import { SET_ERROR } from '../actions/prompts'

const initialState = null

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errMessage
    default:
      return state
  }
}

export default errorReducer