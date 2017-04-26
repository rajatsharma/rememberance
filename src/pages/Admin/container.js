import { connect } from 'react-redux'
// import { pick } from 'ramda'
import Admin from './main'

const mapDispatchToProps = dispatch => ({
  emitToFirebase: (path, value) => dispatch({ type:'FIREBASEEMITPOSTERURL', payload:{ path, value } }),
  emitToStore: (path, value) => dispatch({ type:'CHANGEPOSTERURL', payload:{ path, value } })
})

const mapStateToProps = state => ({
  firebaseData: state.admin.firebaseObject.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
