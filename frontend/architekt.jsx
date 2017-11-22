import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//FOR TESTING ... importing to test login, logout and signup requests
import * as APIUtil from './util/session_api_util';
import {login, logout, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //FOR TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //FOR TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
