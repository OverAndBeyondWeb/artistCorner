import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Authorization extends Component {

  state = {
    fields: {
      username: '',
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

  submitForm = (e) => {
    e.preventDefault();
    let user = this.state.fields;
    let url = '/auth' + this.props.match.path;

    axios.post(url, user)
      .then(res => {
        this.props.history.replace("/dashboard");
      })
      .catch(err => console.log(err));
  }

  render() {
    
    const formComponent = this.props.match.path === '/register' ?
      <Register
        values={this.state.fields}
        setStateFromForm={this.setStateFromForm}
        submitForm={this.submitForm}
      /> :
      <Login
        values={this.state.fields}
        setStateFromForm={this.setStateFromForm}
        submitForm={this.submitForm}
      />;
     
    return (
      <Wrapper>
        {formComponent}
      </Wrapper>
      
    )
  }
};

export default Authorization;
