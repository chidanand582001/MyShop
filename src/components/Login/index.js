import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { AuthContext } from '../../contexts/auth';

export class Login extends Component {
  static contextType = AuthContext;

  render() {
    // Redirect the user to home page if already logged in
    if (this.context.isAuthenticated) {
      return <Redirect to='/' from='/login' />;
    }

    return (
      <div>
        <button onClick={this.context.login}>Login</button>
      </div>
    );
  }
}

export default Login;
