import React, { Component } from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    isLoggedIn: false
  }

  render () {
    return (
      <AuthContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          logUserOut: () => this.setState({
            isLoggedIn: false
          }),
          logUserIn: () => this.setState({
            isLoggedIn: true
          })
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
};

export const withAuth = Component => {
  return (props) => (
    <AuthContext.Consumer>
      {context => <Component {...props} context={context} />}
    </AuthContext.Consumer>
  )
};

