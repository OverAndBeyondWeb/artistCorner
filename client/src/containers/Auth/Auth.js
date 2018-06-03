import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

class Auth extends Component {

  state = {
    fields: {
      name: '',
      email: '',
      password: '',
      password2: ''
    } 
  };

  setStateFromForm = (e) => {
  
    let fields = {...this.state.fields};
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  render() {
    
    const formComponent = this.props.match.path === '/register' ?
      <Register values={this.state.fields} setStateFromForm={this.setStateFromForm}/> :
      <Login values={this.state.fields} setStateFromForm={this.setStateFromForm}/>;
     
    return (
      <Wrapper>
        {formComponent}
      </Wrapper>
      
    )
  }
};

export default Auth;
