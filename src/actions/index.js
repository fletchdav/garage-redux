export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CAR_ADDED = 'CAR_ADDED';


export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createCar(body, garage, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`
  const request = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json()).then(callback)

  return {
    type: CAR_ADDED,
    payload: request
  };
}
