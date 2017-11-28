import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link, Switch } from 'react-router-dom'
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { StoriesIndexContainer } from './stories/stories_index_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Architekt</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route exact path="/" component={ StoriesIndexContainer } />
    </Switch>
  </div>
);

export default App;
