import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Register = (props) => {
  const { name, email, password, password2 } = props.values;
  return (
    <div className='register-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Sign up for a new account today!
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='Username'
                name="name"
                value={name}
                onChange={(e) => props.setStateFromForm(e)}
              />
              <Form.Input
                fluid icon='mail'
                iconPosition='left'
                placeholder='E-mail address'
                name="email"
                value={email}
                onChange={(e) => props.setStateFromForm(e)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password"
                value={password}
                onChange={(e) => props.setStateFromForm(e)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                name="password2"
                value={password2}
                onChange={(e) => props.setStateFromForm(e)}
              />

              <Button
                color='teal'
                fluid size='large'
                onClick={(e) => props.submitForm(e)}>
                  Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Already registered?<Link to='/login'>Login</Link >
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Register;
