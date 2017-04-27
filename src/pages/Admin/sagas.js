import { call, put, cancel, takeLatest, take } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getFirebase } from 'react-redux-firebase'

export function* updateFirebase (action) {
  yield call(delay, 1000)
  getFirebase().set(`posters/${action.payload.path}`, action.payload.value)
  console.log('updated firebase')
  yield put({ type: 'SHOWHIDETOASTER', payload: true })
  console.log('updated firebase toaster')
  yield call(delay, 1000)
  yield put({ type: 'SHOWHIDETOASTER', payload: false })
}

export function* syncFirebase ({ path, ordered, data, timestamp, requesting, requested }) {
  if (path === '/posters') {
    yield put({ path, ordered, data, timestamp, requesting, requested, type: 'FIREABASESYNCED' })
  }
}

export function* rootAdminSaga () {
  const changeposterwatcher = yield takeLatest('CHANGEPOSTERURL', updateFirebase)
  const setFirebaseWatcher = yield takeLatest('@@reactReduxFirebase/SET', syncFirebase)
  yield take('LOCATION_CHANGE')
  yield cancel(changeposterwatcher)
  yield cancel(setFirebaseWatcher)
}

export default [
  rootAdminSaga
]
