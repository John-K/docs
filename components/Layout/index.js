/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Masthead from '../masthead'
// import Link from '../Link';
import SearchBar from '../search-bar'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <header className="app--header">
          <div className="ui container">
            <Navigation />
          </div>
        </header>
        <div>
          <Masthead />
          <SearchBar />
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
