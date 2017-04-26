import { connect } from 'react-redux'
import { pick } from 'ramda'
import FirebaseConnector from '../../futils/firebaseconnector'
import Home from './main'

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch({ type: 'HOMEACTIONGETMOVIES' }),
  epicCheck: () => dispatch({ type: 'EPICCHECK' })
})

const mapStateToProps = state => ({
  ...pick(['movies', 'epicWorking', 'loader'], state.home)
})

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseConnector(Home, '/posters', 'posters'))
