import React from 'react'
import { pick } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Spinning from 'grommet/components/icons/Spinning'
import PropTypes from 'prop-types'
import Toast from 'grommet/components/Toast'

export const AppHeader = props => (
  <Header justify="center" colorIndex="grey-1">
    <Box size={{ width: { max: 'xxlarge' } }} direction="row"
      responsive={false} justify="start" align="center"
      pad={{ horizontal: 'medium' }} flex="grow">
      <Box pad={{ horizontal: 'medium' }}>
        {props.loader && <Spinning size="medium" />}
      </Box>

      <Title>
        <Link to="/">
          Star Crawls
        </Link>
      </Title>

    </Box>
    {props.toaster && <Toast status="ok">
      Database Synced Successfully
    </Toast>}
  </Header>
)

AppHeader.propTypes = {
  loader: PropTypes.bool,
  toaster: PropTypes.bool
}

const mapStateToProps = state => ({
  ...pick(['loader', 'toaster'], state.core)
})

export default connect(mapStateToProps)(AppHeader)
