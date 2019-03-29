import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import reducer from 'reducers/main'
import App from 'containers/App'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
