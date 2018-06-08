import React, { Component } from 'react';
import { Container, Segment, Grid, Image, Button, Icon } from 'semantic-ui-react';
import './Home.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
          <Segment inverted>
            <h1 className="main-heading">The Artist Corner</h1>
            <Button primary size='huge'>
              Connect Now
            </Button>
            <Button primary size='huge'>
              Create an Account
              <Icon name='right arrow' />
            </Button>
          </Segment>
          
        </Container>
        <Container>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <h3 className="sub-heading">Connect With Artists Around The World!</h3>
                  <p style={{ fontSize: '1.33em' }} className="main-font">
                    We can give you the opportunity to gain insight within your own endeavors, by collaborating with other like minded individuals. Share your triumphs and difficulties with people who share your passions. Enhance your unique artist touch with ideas that can now transcend modern day barriers.
                  </p>
                  <h3 className="sub-heading">Be A Part Of A Growing Community</h3>
                  <p style={{ fontSize: '1.33em' }} className="main-font">
                    Get signed up today! We would love to be a part of your artistic journey!
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    bordered
                    rounded
                    size='large'
                    src='images/painting.jpg'
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge'>Check It Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        
      </div>
    )
  }
}
