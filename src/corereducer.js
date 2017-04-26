import Reducer from './futils/reducecreator'

const ACTION_HANDLERS = {
  SHOWHIDELOADER: (state, action) => Object.assign({}, state, { loader: action.payload }),
  SHOWHIDETOASTER: (state, action) => Object.assign({}, state, { toaster: action.payload })
}

const initialState = { loader: false, toaster:false }

export default Reducer(initialState, ACTION_HANDLERS)
