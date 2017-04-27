import { combineReducers } from 'redux'
import locationReducer from './location'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import CoreReducer from '../core/corereducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    core: CoreReducer,
    firebase,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
