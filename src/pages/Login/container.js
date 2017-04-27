import { connect } from 'react-redux'
import { pick } from 'ramda'
import FirebaseConnector from '../../futils/firebaseconnector'
import Login from './main'

const mapDispatchToProps = dispatch => ({
  updateUsername: (payload) => dispatch({ type: 'UPDATEUSERNAME', payload }),
  updatePassword: (payload) => dispatch({ type: 'UPDATEPASSWORD', payload }),
  authenticate: (payload) => dispatch({ type:'AUTHENTICATE', payload })
})

const mapStateToProps = state => ({
  ...pick(['username', 'password'], state.login),
  ...pick(['authenticated'], state.core)
})

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseConnector(Login, '/auth', 'auth'))
