import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Authorization from './containers/Authorization/Authorization';
import Dashboard from './containers/Dashboard/Dashboard';
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
              <Route path={"/login"} component={Authorization}/>
              <Route path={"/dashboard"} component={Dashboard}/>
            </Layout>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
