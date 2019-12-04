import { SEARCH_ARTIST } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_ARTIST:
      return action.payload.data.artists;
    default:
      return state;
  }
}
