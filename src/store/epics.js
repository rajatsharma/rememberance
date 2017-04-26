import { combineEpics } from 'redux-observable'
import { getFirebase } from 'react-redux-firebase'
import CoreEpics from '../coreepics'

const enhancedCombineEpics = (...epics) => (...args) => combineEpics(...epics)(...args, getFirebase)

export const createRootEpic = (asyncEpics = []) => {
  return enhancedCombineEpics(
    ...CoreEpics,
    ...asyncEpics
  )
}

export const injectEpic = (store, { epics }) => {
  store.replaceEpic(createRootEpic(epics))
}

export default createRootEpic
