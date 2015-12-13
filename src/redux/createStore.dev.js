import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './middlewares/api';
import routes from '../routes';
import reducer from './reducer';
import createLogger from 'redux-logger';
import * as swapi from 'helpers/swapi';

const logger = createLogger({
  collapsed: true
});

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware(swapi)),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(logger)
)(createStore);

export default function () {
  const store = finalCreateStore(reducer);
  return store;
}
