import React from 'react'
import { connect } from 'react-redux'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Hero from 'grommet/components/Hero'
import PropTypes from 'prop-types'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'

const AdminView = ({ firebaseData, emitToStore }) =>
  <Box>
    {firebaseData && firebaseData.map((x, i) =>
      <Hero key={i} size="large" backgroundImage={x.poster}
        colorIndex="dark"
        justify={x.crawlPosition}>
        <Card
          colorIndex="grey-1"
          size="xlarge"
        >
          <TextInput value={x.poster} onDOMChange={(x) => emitToStore(i, 'poster', x.target.value)} />
          <Box direction="row">
            <Box pad="medium">
              <Button
                label="Start"
                onClick={() => emitToStore(i, 'crawlPosition', 'start')}
                primary={x.crawlPosition === 'start'}
              />
            </Box>
            <Box pad="medium">
              <Button
                label="Center"
                onClick={() => emitToStore(i, 'crawlPosition', 'center')}
                primary={x.crawlPosition === 'center'}
              />
            </Box>
            <Box pad="medium">
              <Button
                label="End"
                onClick={() => emitToStore(i, 'crawlPosition', 'end')}
                primary={x.crawlPosition === 'end'}
              />
            </Box>
          </Box>
        </Card>
      </Hero>)}
  </Box>

AdminView.propTypes = {
  firebaseData:PropTypes.array,
  emitToStore: PropTypes.func
}

export default connect(
  ({ firebase }) => {
    return {
      posters:dataToJS(firebase, 'posters')
    }
  }
)(firebaseConnect(['/posters'])(AdminView))
