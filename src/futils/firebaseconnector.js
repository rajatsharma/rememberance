import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import { connect } from 'react-redux'

export default (component, path, key) => connect(
  ({ firebase }) => ({
    [key]: dataToJS(firebase, key)
  })
)(firebaseConnect([path])(component))
