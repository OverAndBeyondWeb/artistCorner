import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
          </Layout>
        </div>
      </Router>
      
    );
  }
}

export default App;
