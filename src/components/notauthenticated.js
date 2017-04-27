import React from 'react'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import { Link } from 'react-router'

const NotAuthenticated = props =>
  <Box
    justify="center"
    pad="large"
    align="center"
    appCentered
    full
    texture="http://photos.imageevent.com/afap/wallpapers/movies/starwarsanewhopepostersetc/star%20wars%20poster.jpg"//eslint-disable-line
  >
    <Card colorIndex="grey-1" contentPad="large"
      label="Not Authenticated"
      description="Authenticate to access Admin"
    >
      <Link to="/login">
        Go to Login
      </Link>
    </Card>
  </Box>

export default NotAuthenticated
