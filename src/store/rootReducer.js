import { combineReducers } from "redux";
import user from "./user/reducer";
import lobby from "../store/lobby/reducer";

export default combineReducers({
  user,
  lobby
});
