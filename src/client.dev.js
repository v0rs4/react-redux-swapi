import React from 'react';
import { render } from 'react-dom';
import createStore from './redux/createStore.dev';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

require('normalize-css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('animate.css/animate.min.css');

const store = createStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
);
