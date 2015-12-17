import React from 'react';
import { render } from 'react-dom';
import createStore from './redux/createStore.dev';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import DevTools from 'containers/DevTools';

require('normalize-css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('animate.css/animate.min.css');

const store = createStore();

render(
  <Provider store={store}>
    <div>
      <ReduxRouter />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
