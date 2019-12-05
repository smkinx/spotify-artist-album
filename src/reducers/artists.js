import { SEARCH_ARTISTS, FETCH_MORE_ARTISTS, REMOVE_ARTISTS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_ARTISTS:
      return action.payload.data.artists.items;
    case FETCH_MORE_ARTISTS:
      return [...state, ...action.payload.data.artists.items];
    case REMOVE_ARTISTS:
      return action.payload;
    default:
      return state;
  }
}
