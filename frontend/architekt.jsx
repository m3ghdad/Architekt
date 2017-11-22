import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

//FOR TESTING ... importing to test login, logout and signup requests
import * as APIUtil from './util/session_api_util';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //FOR TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  window.signup = APIUtil.signup;
  //FOR TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Architekt</h1>, root);
});
