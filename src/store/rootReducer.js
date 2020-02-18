import { combineReducers } from "redux";
import user from "./user/reducer";
import rooms from "../store/lobby/reducer";

export default combineReducers({
  user,
  rooms
});
