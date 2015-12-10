import React from 'react';
import { render } from 'react-dom';
import createStore from './redux/createStore.dev';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

const store = createStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
);
