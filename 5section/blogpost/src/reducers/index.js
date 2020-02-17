import { combineReducers } from "redux";
import postsReducers from './postsReducer';
import userReducer from './usersReducer';

export default combineReducers({
  posts: postsReducers,
  users: userReducer
});
