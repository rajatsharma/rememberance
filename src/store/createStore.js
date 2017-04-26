import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { reactReduxFirebase } from 'react-redux-firebase'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import createRootEpic from './epics'
import { updateLocation } from './location'
import { firebase as fbConfig, reduxFirebase as reduxConfig } from '../fireconfig'

const epicMiddleware = createEpicMiddleware(createRootEpic())

export default(initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    epicMiddleware
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      reactReduxFirebase(fbConfig, reduxConfig),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  store.replaceEpic = epicMiddleware.replaceEpic
  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
