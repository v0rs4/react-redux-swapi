import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import people from './bundles/people';
import films from './bundles/films';

export default combineReducers({
  people,
  films,
  router
});
