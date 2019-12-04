import { combineReducers } from 'redux';
import Artists from './artists';
import Search from './search';

const rootReducer = combineReducers({
  artists: Artists,
  search: Search
})

export default rootReducer;
