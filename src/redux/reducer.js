import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import people from './bundles/people';

export default combineReducers({ people, router });
