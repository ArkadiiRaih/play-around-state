import { combineReducers } from "redux";
import { FETCH_CHARACTERS_FULLFILLED } from "./actions";

const charactersReducer = (characters = [], action) => {
  if (action.type === FETCH_CHARACTERS_FULLFILLED) {
    return action.payload;
  }
  return characters;
};

export default combineReducers({ characters: charactersReducer });
