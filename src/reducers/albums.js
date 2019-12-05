import { FETCH_ALBUMS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      console.log(action.payload.data.items)
      return action.payload.data.items
    default:
      return state;
  }
}
