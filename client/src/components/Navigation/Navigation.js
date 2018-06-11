import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react'
import Avatar from '../Avatar/Avatar';

class Navbar extends Component {

  render() {
    const loginBtn = <Link to="/login"><Button inverted>Log in</Button></Link>,
      signupBtn = <Link to="/register"><Button inverted primary style={{ marginLeft: "0.5em" }}>Sign Up</Button></Link>;
      const { isLoggedIn, logUserOut } = this.props.context;
      const { avatar } = this.props.location.state || 'https://api.adorable.io/avatars/164/abott@adorable.png';
    return (
      
        <Menu inverted>
          <Container>
            <Link to="/"><Menu.Item >Home</Menu.Item></Link>
            <Link to="/profiles"><Menu.Item >Profiles</Menu.Item></Link>
            <Link to="posts"><Menu.Item >Posts</Menu.Item></Link>
            <Menu.Item position='right'>
                  {isLoggedIn ?
                    <Avatar avatarURL={avatar} username={'clara'}/> : signupBtn}
                  {isLoggedIn ?
                    <Link to="/"><Button inverted onClick={logUserOut}>Log Out</Button></Link> : loginBtn} 
                </Menu.Item>
          </Container>
        </Menu>
    )
  }
};

export default withRouter(Navbar);