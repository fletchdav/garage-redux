import {FETCH_CARS} from '../actions/index';
import {FETCH_CAR} from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
      return [action.payload];
    default:
      return state;
  }
}
