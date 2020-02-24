import { combineReducers } from "redux";
import { ADD_TWEETS } from "./actions";

export const tweets = (tweets = [], action) => {
  if (action.type === ADD_TWEETS) {
    return action.payload;
  }
  return tweets;
};

export default combineReducers({ tweets });
