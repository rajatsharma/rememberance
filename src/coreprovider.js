import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import GrommetApp from 'grommet/components/App'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <GrommetApp centered={false}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} children={routes} />
          </div>
        </GrommetApp>
      </Provider>
    )
  }
}

export default AppContainer
