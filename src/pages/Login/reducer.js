import Reducer from '../../futils/reducecreator'

const ACTION_HANDLERS = {
  UPDATEUSERNAME: (state, action) => Object.assign({}, state, { username: action.payload }),
  UPDATEPASSWORD: (state, action) => Object.assign({}, state, { password : action.payload })
}

const initialState = { username: '', password: '' }

export default Reducer(initialState, ACTION_HANDLERS)
