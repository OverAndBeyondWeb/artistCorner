import React, { Component } from 'react';
import { Container, Header, Input } from 'semantic-ui-react';

export default class Register extends Component {
  state={
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  onchange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container text>
        <Header as="h2">I am the register page</Header>
        <Input name="username" onChange={this.onChange} value="username"  fluid />
        <Input  value="email" onchange = {this.onchange} placeholder="email" fluid />
        <Input name="password" onChange={this.onChange} value="password" placeholder="password" fluid />
        <Input name="password2" onChange={this.onChange} value="password2" placeholder="confirm password" fluid />
      </Container>
    )
  }
}
