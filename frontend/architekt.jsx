import React from 'react';
import ReactDOM from 'react-dom';

//FOR TESTING ... importing to test login, logout and signup requests
import * as APIUtil from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {

  //FOR TESTING
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  //FOR TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Architekt</h1>, root);
});
