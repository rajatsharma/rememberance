import { call, put, takeLatest } from 'redux-saga/effects'
import Request from '../futils/requestutil'

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
  yield takeLatest('HOMEACTIONGETMOVIES', getMovieCrawls)
}

export default rootSaga
