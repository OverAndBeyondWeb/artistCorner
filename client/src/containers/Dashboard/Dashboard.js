import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { AuthContext } from '../../context/AuthContext';

class Dashboard extends Component {
  state = {

  }

  render() {
    return (
        <AuthContext.Consumer>
          {context => (
            <div>
              <Header content="Dashboard"/>
              <div>hey{this.props.match.params.username}</div>
            </div>
          )}
        </AuthContext.Consumer>
    )
  }
}

export default Dashboard;