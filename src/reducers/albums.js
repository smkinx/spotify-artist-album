import { FETCH_ALBUMS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload.data.artists.items;
    default:
      return state;
  }
}
