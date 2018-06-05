import React, { Component } from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    isLoggedIn: true
  }

  render () {
    return (
      <AuthContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          logUserOut: () => this.setState({
            isLoggedIn: false
          })
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

