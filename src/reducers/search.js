import { SEARCH_ARTIST, FETCH_MORE_ARTISTS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_ARTIST:
      return action.payload.data.artists;
    case FETCH_MORE_ARTISTS:
      return action.payload.data.artists;
    default:
      return state;
  }
}
