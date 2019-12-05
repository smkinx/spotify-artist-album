import { SEARCH_ARTIST, FETCH_MORE_ARTISTS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_ARTIST:
      return action.payload.data.artists.items;
    case FETCH_MORE_ARTISTS:
      return [...state, ...action.payload.data.artists.items];
    default:
      return state;
  }
}
