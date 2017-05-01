import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import PropTypes from 'prop-types'

export class HomeView extends Component {
  componentDidMount () {
    this.props.getMovies()
  }
  render () {
    return (
      <Box>
        {this.props.posters && this.props.movies.map((x, i) =>
          <Hero key={i} size="xlarge" backgroundImage={this.props.posters[i].poster} colorIndex="dark"
            justify={this.props.posters[i].crawlPosition}>
            <Card
              label={`Episode ${i + 1}`}
              colorIndex="grey-1"
              heading={
                <Heading strong>
                  {x.title}
                </Heading>
              }
              description={x.opening_crawl}
              size="xlarge"
            />
          </Hero>)}
      </Box>
    )
  }
}

HomeView.propTypes = {
  posters: PropTypes.array,
  getMovies: PropTypes.func,
  movies: PropTypes.array,
  epicCheck: PropTypes.func,
  epicWorking: PropTypes.bool
}

export default HomeView
