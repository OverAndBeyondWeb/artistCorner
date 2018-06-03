import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    return (
      
        <Menu inverted size='large'>
          <Container>
            <Link to=""><Menu.Item >Home</Menu.Item></Link>
            <Link to=""><Menu.Item >Company</Menu.Item></Link>
            <Link to=""><Menu.Item >Careers</Menu.Item></Link>
            <Menu.Item position='right'>
              <Link to="/login"><Button inverted>Log in</Button></Link>
              <Link to="/register"><Button inverted primary style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}
