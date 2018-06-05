import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Authorization from './containers/Authorization/Authorization';
import { AuthProvider } from './context/AuthContext';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Layout>
              <Route exact path="/" component={Home}/>
              <Route path={"/register"} component={Authorization}/>
              <Route path={"/Login"} component={Authorization}/>
            </Layout>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
