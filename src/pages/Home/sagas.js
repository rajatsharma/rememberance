import { call, put, takeLatest, take, cancel } from 'redux-saga/effects'
import Request from '../../futils/requestutil'

export function* getMovieCrawls () {
  yield put({ type: 'SHOWHIDELOADER', payload: true })
  try {
    const crawls = yield call(Request, 'http://swapi.co/api/films/?format=json')
    yield put({ type: 'HOMEACTIONGOTMOVIES', payload: crawls.results })
    yield put({ type: 'SHOWHIDELOADER', payload: false })
  } catch (err) {
    yield put({ type: 'ERROROCCURED' })
  }
}

export function* rootSaga () {
  const watcher = yield takeLatest('HOMEACTIONGETMOVIES', getMovieCrawls)
  // Suspend execution until location changes // Core sagas never Suspend
  yield take('LOCATION_CHANGE')
  yield cancel(watcher)
}

export default [
  rootSaga
]
