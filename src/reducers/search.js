import { SEARCH_ARTISTS, FETCH_MORE_ARTISTS, REMOVE_ARTISTS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_ARTISTS:
      return action.payload.data.artists;
    case FETCH_MORE_ARTISTS:
      return action.payload.data.artists;
    case REMOVE_ARTISTS:
      return []
    default:
      return state;
  }
}
