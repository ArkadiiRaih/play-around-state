import { combineReducers } from "redux";
import { ADD_TWEETS, SET_STATUS } from "./actions";

export const tweets = (tweets = [], action) => {
  if (action.type === ADD_TWEETS) {
    return action.payload;
  }
  return tweets;
};

export const status = (status = "LOADED", action) => {
  if (action.type === SET_STATUS) {
    return action.payload.status;
  }
  return status;
};

export default combineReducers({ tweets, status });
