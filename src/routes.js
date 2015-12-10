import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ApplicationLayout from 'layouts/Application/Application';
import People from 'containers/People/People';
import Films from 'containers/Films/Films';

export default (
  <Route path='/' component={ApplicationLayout}>
    <IndexRoute component={People}/>
    <Route path='films' component={Films} />
  </Route>
);
