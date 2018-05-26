import React, { Component } from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Container>
          <Header as='h1'>Theming Examples</Header>
        </Container>
      </div>
    );
  }
}

export default App;
