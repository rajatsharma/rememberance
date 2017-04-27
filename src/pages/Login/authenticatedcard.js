import React from 'react'
import Card from 'grommet/components/Card'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const AuthenticatedCard = props =>
  <Card
    colorIndex="grey-1"
    contentPad="large"
    label="Already Authenticated"
    description="Trying to Login, Already Logged in you are"
  >
    <Box pad="medium">
      <Button
        label="Invalidate"
        onClick={() => props.invalidate()}
      />
    </Box>
    <Link to="admin">
      Go to Admin
    </Link>
  </Card>

AuthenticatedCard.propTypes = {
  invalidate:PropTypes.func
}

export default AuthenticatedCard
