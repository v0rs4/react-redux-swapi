import { createReducer } from 'helpers';
import * as swapi from 'helpers/swapi';
const FETCH_REQUEST = 'react-redux-swapi/films/fetchRequest';
const FETCH_SUCCESS = 'react-redux-swapi/films/fetchSuccess';
const FETCH_FAILURE = 'react-redux-swapi/films/fetchFailure';

const INITIAL_STATE = {
  totalQty: 0,
  nextUrl: null,
  previousUrl: null,
  items: [],
  isFetching: false,
  isFetched: false,
  error: null
};

export default createReducer(INITIAL_STATE, {
  [FETCH_REQUEST]: () => ({
    isFetching: true
  }),
  [FETCH_SUCCESS]: (state, { data }) => ({
    ...data,
    isFetching: false
  }),
  [FETCH_FAILURE]: () => ({
    isFetching: false
  })
});

export function fetchFilmsSuccess(json) {
  return {
    type: FETCH_SUCCESS,
    data: {
      totalQty: json.count,
      nextUrl: json.next,
      previousUrl: json.previous,
      items: json.results
    }
  };
}

export function fetchFilmsFailure(error) {
  return {
    type: FETCH_FAILURE,
    error
  };
}

export function fetchFilmsRequest() {
  return {
    type: FETCH_REQUEST
  };
}

export function fetchFilms() {
  return dispatch => {
    dispatch(fetchFilmsRequest);
    swapi.fetchFilms()
      .then(json => dispatch(fetchFilmsSuccess(json)))
      .catch(error => dispatch(fetchFilmsFailure(error)));
  };
}
