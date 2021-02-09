// @flow

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from 'view/index';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
