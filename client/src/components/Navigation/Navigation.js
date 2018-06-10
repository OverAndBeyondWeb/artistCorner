import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, Menu, Button } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    const loginBtn = <Link to="/login"><Button inverted>Log in</Button></Link>,
      signupBtn = <Link to="/register"><Button inverted primary style={{ marginLeft: "0.5em" }}>Sign Up</Button></Link>;
    return (
      
        <Menu inverted>
          <Container>
            <Link to="/"><Menu.Item >Home</Menu.Item></Link>
            <Link to="/profiles"><Menu.Item >Profiles</Menu.Item></Link>
            <Link to="posts"><Menu.Item >Posts</Menu.Item></Link>
            <AuthContext.Consumer>
              {context => (
                <Menu.Item position='right'>
                  {context.isLoggedIn ?
                    <Menu.Item>Hi Clara</Menu.Item> : signupBtn}
                  {context.isLoggedIn ?
                    <Link to="/"><Button inverted onClick={context.logUserOut}>Log Out</Button></Link> : loginBtn} 
                </Menu.Item>
              )}
            </AuthContext.Consumer>
          </Container>
        </Menu>
    )
  }
}
