import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { legacy_createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//legcy create store has been replaced by configure store - note to replace later
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
})
