import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    return (
      
        <Menu inverted>
          <Container>
            <Link to="/"><Menu.Item >Home</Menu.Item></Link>
            <Link to="/profiles"><Menu.Item >Profiles</Menu.Item></Link>
            <Link to="posts"><Menu.Item >Posts</Menu.Item></Link>
            <Menu.Item position='right'>
              <Link to="/login"><Button inverted>Log in</Button></Link>
              <Link to="/register"><Button inverted primary style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}
