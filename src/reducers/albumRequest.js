import { FETCH_ALBUMS, FETCH_MORE_ALBUMS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload.data;
    case FETCH_MORE_ALBUMS:
      return action.payload.data;
    default:
      return state;
  }
}
