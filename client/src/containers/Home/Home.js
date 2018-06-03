import React, { Component } from 'react';
import { Container, Segment, Grid, Header, Image, Button, Icon } from 'semantic-ui-react';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
          <Segment inverted>
            <Header
              as='h1'
              content='Imagine-a-Company'
              inverted
            />
            <Header
              as='h2'
              content='Do whatever you want when you want to.'
              inverted
            />
            <Button primary size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Segment>
          
        </Container>
        <Container>
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    We can give your company superpowers to do things that they never thought possible. Let us delight
                    your customers and empower your needs... through pure data analytics.
                  </p>
                  <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
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
                  <Button size='huge'>Check Them Out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        
      </div>
    )
  }
}
