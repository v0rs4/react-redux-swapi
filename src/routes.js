import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ApplicationLayout from 'layouts/Application/Application';
import People from 'containers/People/People';

export default (
  <Route path='/' component={ApplicationLayout}>
    <IndexRoute component={People}/>
  </Route>
);
