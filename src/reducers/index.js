import { combineReducers } from 'redux';
import Artists from './artists';
import Search from './search';
import Auth from './auth';
import Albums from './albums';
import AlbumRequest from './albumRequest'

const rootReducer = combineReducers({
  artists: Artists,
  search: Search,
  auth: Auth,
  albums: Albums,
  albumRequest: AlbumRequest
})

export default rootReducer;
