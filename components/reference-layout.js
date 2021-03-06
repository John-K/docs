import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReferenceMenu from './reference-menu'
import HelpUs from './helpus'
import Link from './Link'

export default class ReferenceLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentPageTitle: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="ui container main-content">
        <div className="ui stackable grid">
          <div className="five wide column side-bar">
            <ReferenceMenu sideMenu />
          </div>
          <div className="eleven wide column doc-content">
            <div className="ui breadcrumb">
              <Link to="/" className="section">
                <i className="home icon" />
                Docs
              </Link>
              <i className="right chevron icon divider" />
              <Link to="/reference/" className="section">
                API Reference
              </Link>
              <i className="right chevron icon divider" />
              <div className="active section">
                {this.props.currentPageTitle}
              </div>
            </div>
            <div className="ui divider" />

            {this.props.children}

            <HelpUs />
          </div>
        </div>
      </div>
    )
  }
}
