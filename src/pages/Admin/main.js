import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Hero from 'grommet/components/Hero'
// import PropTypes from 'prop-types'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
// import FirebaseConnector from '../../futils/firebaseconnector'
import TextInput from 'grommet/components/TextInput'

export class AdminView extends Component {
  render () {
    const { handleSubmit, posters, emitToFirebase, firebaseData, emitToStore } = this.props // eslint-disable-line
    return (
      <Box>
        {firebaseData && firebaseData.map((x, i) =>
          <Hero key={i} size="large" backgroundImage={x}
            colorIndex="dark"
            justify={i % 2 === 0 ? 'start' : 'end'}>
            <Card
              colorIndex="grey-1"
              size="xlarge"
            >
              <TextInput value={x} onDOMChange={(x) => emitToStore(i, x.target.value)} />
            </Card>
          </Hero>)}
      </Box>
    )
  }
}

export default connect(
  ({ firebase }) => {
    return {
      posters:dataToJS(firebase, 'posters')
    }
  }
)(firebaseConnect(['/posters'])(AdminView))
