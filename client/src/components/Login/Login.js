import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const Login = (props) => {
  const { email, password } = props.values;
  return (
    <div className='login-form'>
    
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
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
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

              <Button
                color='teal'
                fluid
                size='large'
                onClick={(e) => props.submitForm(e)}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/register'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
};

export default Login;