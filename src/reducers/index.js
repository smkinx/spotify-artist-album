import { combineReducers } from 'redux';
import Artists from './artists';
import Search from './search';
import Auth from './auth';

const rootReducer = combineReducers({
  artists: Artists,
  search: Search,
  auth: Auth
})

export default rootReducer;
