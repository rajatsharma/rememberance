import React from 'react'
import Box from 'grommet/components/Box'
import PropTypes from 'prop-types'
import { pick } from 'ramda'
import { connect } from 'react-redux'
import NotAuthenticated from '../components/notauthenticated'

export default Component => {
  const AuthWrapper = props =>
    <Box>
      {props.authenticated ? <Component {...props} /> : <NotAuthenticated /> }
    </Box>

  AuthWrapper.propTypes = {
    authenticated: PropTypes.bool
  }

  const mapStateToProps = state => ({
    ...pick(['authenticated'], state.core)
  })

  return connect(mapStateToProps)(AuthWrapper)
}
