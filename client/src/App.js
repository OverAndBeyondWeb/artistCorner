import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route path={"/register"} component={Auth}/>
            <Route path={"/Login"} component={Auth}/>
          </Layout>
        </div>
      </Router>
      
    );
  }
}

export default App;
