import merge from 'lodash/object/merge';

const FETCH_REQUEST = 'react-redux-swapi/films/fetchRequest';
const FETCH_SUCCESS = 'react-redux-swapi/films/fetchSuccess';
const FETCH_FAILURE = 'react-redux-swapi/films/fetchFailure';

const INITIAL_STATE = {
  isFetching: false,
  isFetched: false,
  apiResponse: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return merge({}, state, {
        isFetching: true
      });
    case FETCH_SUCCESS:
      return merge({}, state, {
        isFetching: false,
        isFetched: true,
        apiResponse: action.payload
      });
    case FETCH_FAILURE:
      return merge({}, state, {
        isFetching: false,
        isFetched: false
      });
    default:
      return state;
  }
};

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
