import { createReducer } from 'helpers';
import * as swapi from 'helpers/swapi';

const FETCH_PEOPLE_REQUEST = 'react-redux-swapi/people/fetchPeopleRequest';
const FETCH_PEOPLE_SUCCESS = 'react-redux-swapi/people/fetchPeopleSuccess';
const FETCH_PEOPLE_FAILURE = 'react-redux-swapi/people/fetchPeopleFailure';

const INITIAL_STATE = {
  totalQty: 0,
  nextUrl: null,
  previousUrl: null,
  items: [],
  isFetching: false
};

export default createReducer(INITIAL_STATE, {
  [FETCH_PEOPLE_REQUEST]: () => ({
    isFetching: true
  }),
  [FETCH_PEOPLE_SUCCESS]: (state, { data }) => ({
    ...data,
    isFetching: false
  }),
  [FETCH_PEOPLE_FAILURE]: (state, { error }) => ({
    isFetching: false,
    error
  })
});

export function fetchPeopleSuccess(json) {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    data: {
      totalQty: json.count,
      nextUrl: json.next,
      previousUrl: json.previous,
      items: json.results
    }
  };
}

export function fetchPeopleFailure(error) {
  return {
    type: FETCH_PEOPLE_FAILURE,
    error
  };
}

export function fetchPeopleRequest() {
  return {
    type: FETCH_PEOPLE_REQUEST
  };
}

export function fetchPeople(url) {
  return dispatch => {
    dispatch(fetchPeopleRequest);
    (url ? swapi.get(url) : swapi.fetchPeople())
      .then(json => dispatch(fetchPeopleSuccess(json)))
      .catch(error => dispatch(fetchPeopleFailure(error)));
  };
}
