import { combineReducers } from 'redux'
import promptsReducer from './prompts'
import errorReducer from './errMessage'
import pendingReducer from './promptsPending'
import prompt from './promptView'

// import stuff from './stuff'

export default combineReducers({
  prompts: promptsReducer,
  errMessage: errorReducer,
  pending: pendingReducer,
  prompt,
})
