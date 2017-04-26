import React from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
