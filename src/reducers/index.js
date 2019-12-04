import { combineReducers } from 'redux';
import session from './sessionReducer';
import url from './urlReducer';

export default combineReducers({
  session,
  url
});
