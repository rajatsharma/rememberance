import Reducer from '../futils/reducecreator'

const ACTION_HANDLERS = {
  SHOWHIDELOADER: (state, action) => Object.assign({}, state, { loader: action.payload }),
  SHOWHIDETOASTER: (state, action) => Object.assign({}, state, { toaster: action.payload }),
  AUTHENTICATE: (state, action) => Object.assign({}, state, { authenticated: action.payload })
}

const initialState = { loader: false, toaster:false, authenticated:false }

export default Reducer(initialState, ACTION_HANDLERS)
