import { applyMiddleware, compose, createStore } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
import { firebase as fbConfig, reduxFirebase as reduxConfig } from '../fireconfig'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export default(initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    sagaMiddleware
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [
  ]

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
  store.runSaga = sagaMiddleware.run
  // store.sagas = []
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
