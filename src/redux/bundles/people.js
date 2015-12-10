import merge from 'lodash/object/merge';

const FETCH_PEOPLE_REQUEST = 'react-redux-swapi/people/fetchPeopleRequest';
const FETCH_PEOPLE_SUCCESS = 'react-redux-swapi/people/fetchPeopleSuccess';
const FETCH_PEOPLE_FAILURE = 'react-redux-swapi/people/fetchPeopleFailure';

const INITIAL_STATE = {
  apiResponse: [],
  isFetching: false,
  isFetched: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PEOPLE_REQUEST:
      return merge({}, state, {
        isFetching: true
      });
    case FETCH_PEOPLE_SUCCESS:
      return merge({}, state, {
        apiResponse: action.payload,
        isFetching: false,
        isFetched: true
      });
    case FETCH_PEOPLE_FAILURE:
      return merge({}, state, {
        isFetching: false,
        isFetched: false
      });
  }
  return state;
}

export function fetchPeople() {
  return {
    apiMiddleware: {
      types: [FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE],
      caller: (swapi, getState) => {
        return swapi.fetchPeople();
      }
    }
  }
}
