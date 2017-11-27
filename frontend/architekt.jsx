import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, signup } from './actions/session_actions';
import { fetchStories, fetchSingleStory } from './actions/story_actions';
//FOR TESTING ... importing to test login, logout and signup requests
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  } 

  //FOR TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStories = fetchStories;
  window.fetchSingleStory = fetchSingleStory;

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //FOR TESTING

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
