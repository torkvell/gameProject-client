import { combineReducers } from "redux";
import user from "./user/reducer";
import lobby from "../store/lobby/reducer";
import gameTable from "../store/gameTable/reducer";

export default combineReducers({
  user,
  lobby,
  gameTable
});
