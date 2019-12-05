import { FETCH_ALBUMS, REMOVE_ALBUMS, FETCH_MORE_ALBUMS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload.data.items
    case REMOVE_ALBUMS:
      return action.payload;
    case FETCH_MORE_ALBUMS:
      return [...state, ...action.payload.data.items];
    default:
      return state;
  }
}
