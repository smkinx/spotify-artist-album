import { FETCH_ALBUMS, REMOVE_ALBUMS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload.data.items
    case REMOVE_ALBUMS:
      return action.payload
    default:
      return state;
  }
}
