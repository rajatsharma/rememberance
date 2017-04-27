import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import PropTypes from 'prop-types'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import AuthenticatedCard from './authenticatedcard'

export class LoginView extends Component {

  authenticate () {
    this.props.authenticate(
      this.props.username === this.props.auth.username &&
      this.props.password === this.props.auth.password
    )
  }

  invalidate () {
    this.props.authenticate(false)
  }

  render () {
    return (
      <Box
        justify="center"
        pad="large"
        align="center"
        appCentered
        full
        texture="http://photos.imageevent.com/afap/wallpapers/movies/starwarsanewhopepostersetc/star%20wars%20poster.jpg"//eslint-disable-line
      >
        {
          !this.props.authenticated
            ? <Card colorIndex="grey-1"
              contentPad="large"
              label="Authenticate"
              description="Authenticate to access Admin"
              >
              <Box pad="medium">
                <TextInput
                  placeHolder="Enter Username"
                  value={this.props.username}
                  onDOMChange={e => this.props.updateUsername(e.target.value)} />
              </Box>
              <Box pad="medium">
                <TextInput
                  placeHolder="Enter Password"
                  value={this.props.password}
                  onDOMChange={e => this.props.updatePassword(e.target.value)} />
              </Box>
              <Box pad="medium">
                <Button
                  label="Login"
                  onClick={() => this.authenticate()} />
              </Box>
            </Card> : <AuthenticatedCard invalidate={() => this.invalidate()} />
        }
      </Box>
    )
  }
}

LoginView.propTypes = {
  auth: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  updateUsername: PropTypes.func,
  updatePassword: PropTypes.func,
  authenticate: PropTypes.func,
  authenticated: PropTypes.bool
}

export default LoginView
