import React from 'react'
import Footer from 'grommet/components/Footer'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'
import { Link } from 'react-router'

export default props => (
  <Box pad="small" colorIndex="grey-1">
    <Footer justify="between" primary>
      <Title>
        Star Crawls
      </Title>
      <Box direction="row"
        align="center"
        pad={{ between: 'medium' }}>
        <Link to="admin">
          Administer Images
        </Link>
        <Paragraph margin="none">
          <Anchor href="https://github.com/rajatsharma305/eldritch">
            Made with Eldritch
          </Anchor>
        </Paragraph>
      </Box>
    </Footer>
  </Box>
)
