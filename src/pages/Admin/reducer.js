import Reducer from '../../futils/reducecreator'
import { update } from 'ramda'

const ACTION_HANDLERS = {
  HOMEACTIONGOTMOVIES: (state, action) => Object.assign({}, state, { movies: action.payload }),
  EPICCHECKSUCCESS: (state, action) => Object.assign({}, state, { epicWorking: true }),
  FIREABASESYNCED: (state, { path, ordered, data, timestamp, requesting, requested }) => Object.assign({},
    state, { firebaseObject: { path, ordered, data, timestamp, requesting, requested } }
  ),
  CHANGEPOSTERURL: (state, action) => Object.assign({},
    state, {
      firebaseObject: {
        ...state.firebaseObject,
        data: update(
          action.payload.path,
          { ...state.firebaseObject.data[action.payload.path], [action.payload.key]:action.payload.value },
          state.firebaseObject.data
         )
      }
    })
}

const initialState = {
  movies: [],
  epicWorking: false,
  firebaseObject: { path: '/posters', ordered: [], data: [], timestamp: 0, requesting: true, requested: true }
}

export default Reducer(initialState, ACTION_HANDLERS)
