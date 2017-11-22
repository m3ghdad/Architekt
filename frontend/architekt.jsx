import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Architekt</h1>, root);
});
