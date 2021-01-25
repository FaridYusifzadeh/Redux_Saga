import { combineReducers } from 'redux';
import { postsReducer } from './postsReducers.js';
export const rootReducer = combineReducers({
  posts: postsReducer,
});
