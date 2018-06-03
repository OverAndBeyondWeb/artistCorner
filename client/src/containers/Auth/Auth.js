import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

class Auth extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  setStateFromForm = (e) => {
    console.log('changing');
    let field = e.target.name;
    this.setState({
      [field]: field.value
    });
  }

  render() {
    
    const formComponent = this.props.match.path === '/register' ?
      <Register values={this.state} setStateFromForm={this.setStateFromForm}/> :
      <Login values={this.state} setStateFromForm={this.setStateFromForm}/>;
     
    return (
      <div>
        {formComponent}
      </div>
      
    )
  }
};

export default Auth;
