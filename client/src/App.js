import React, { Component } from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header as='h1'>Theming Examples</Header>
        </Container>
      </div>
    );
  }
}

export default App;
