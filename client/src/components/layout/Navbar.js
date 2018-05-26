import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    return (
      <Menu>
        <Menu>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item name='aboutUs' onClick={this.handleItemClick} />
        <Menu.Item name='jobs' onClick={this.handleItemClick} />
        <Menu.Item name='locations' onClick={this.handleItemClick} />
      </Menu>
      </Menu>
    )
  }
}
