const apiHost = 'http://swapi.co/api';

function fetchResource(resource, id) {
  const apiPath = id === undefined ? resource : `${resource}/${id}`;
  return get(apiHost + apiPath);
}

export function get(url) {
  return fetch(url)
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .then(response => {
    return response.json();
  });
}

export function fetchPeople(id) {
  return fetchResource('/people', id)
}

export function fetchStarships(id) {
  return fetchResource('/starships', id);
}

export function fetchFilms(id) {
  return fetchResource('/films', id);
}

export function fetchFilms(id) {
  return fetchResource('/films', id);
}

export function fetchPlanets(id) {
  return fetchResource('/planets', id);
}

export function fetchSpecies(id) {
  return fetchResource('/species', id);
}

export function fetchVehicles(id) {
  return fetchResource('/vehicles', id);
}
