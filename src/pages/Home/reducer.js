import Reducer from '../../futils/reducecreator'

const ACTION_HANDLERS = {
  HOMEACTIONGOTMOVIES: (state, action) => Object.assign({}, state, { movies: action.payload }),
  EPICCHECKSUCCESS: (state, action) => Object.assign({}, state, { epicWorking : true })
}

const initialState = { movies: [], epicWorking: false }

export default Reducer(initialState, ACTION_HANDLERS)
