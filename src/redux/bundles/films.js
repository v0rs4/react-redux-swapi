// import merge from 'lodash/object/merge';
import { createReducer } from 'helpers';

const FETCH_REQUEST = 'react-redux-swapi/films/fetchRequest';
const FETCH_SUCCESS = 'react-redux-swapi/films/fetchSuccess';
const FETCH_FAILURE = 'react-redux-swapi/films/fetchFailure';

const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  apiResponse: {}
};

export default createReducer(INITIAL_STATE, {
  [FETCH_REQUEST]: () => ({
    isFetching: true
  }),
  [FETCH_SUCCESS]: (state, { payload }) => ({
    isFetching: false,
    isFetched: true,
    apiResponse: payload
  }),
  [FETCH_FAILURE]: () => ({
    isFetching: false,
    isFetched: false,
    apiResponse: {}
  })
});

export function fetchFilms() {
  return {
    apiMiddleware: {
      types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
      caller: (swapi) => {
        return swapi.fetchFilms();
      }
    }
  };
}
