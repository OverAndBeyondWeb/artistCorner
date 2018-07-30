import React, { Component } from 'react';

export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    user: null
  }

  render () {
    return (
      <AuthContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          user: this.state.user,
          logUserOut: () => this.setState({
            isLoggedIn: false,
            user: null
          }),
          logUserIn: (user) => this.setState({
            isLoggedIn: true,
            user
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

