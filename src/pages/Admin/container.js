import { connect } from 'react-redux'
import Admin from './main'
import Authenticated from '../../connectors/authenticated'

const mapDispatchToProps = dispatch => ({
  emitToFirebase: (path, value) => dispatch({ type:'FIREBASEEMITPOSTERURL', payload:{ path, value } }),
  emitToStore: (path, key, value) => dispatch({ type:'CHANGEPOSTERURL', payload:{ path, key, value } })
})

const mapStateToProps = state => ({
  firebaseData: state.admin.firebaseObject.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated(Admin))
