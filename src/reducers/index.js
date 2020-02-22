import { combineReducers } from "redux";
import lists from "./listReducer";
import cards from "./cardReducer";
import users from "./userReducer";

export default combineReducers({
  lists,
  cards,
  users
});
