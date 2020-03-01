import { combineReducers } from "redux";
import authReducer from './authReducer';
import streamsReducer from './streamReducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form : formReducer,
  streams: streamReducer
});
