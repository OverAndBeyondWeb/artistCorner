import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    return (
      
        <Menu inverted size='large'>
          <Container>
            <Link to=""><Menu.Item as='a'>Home</Menu.Item></Link>
            <Link to=""><Menu.Item as='a'>Company</Menu.Item></Link>
            <Link to=""><Menu.Item as='a'>Careers</Menu.Item></Link>
            <Menu.Item position='right'>
              <Link to="/login"><Button as='a' inverted>Log in</Button></Link>
              <Link to="/register"><Button as='a' inverted primary style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}
