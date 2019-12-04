import { combineReducers } from 'redux';
import Artists from './artists';

const rootReducer = combineReducers({
  artists: Artists
})

export default rootReducer;
