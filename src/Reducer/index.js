import { combineReducers } from "redux";
import MatchListReducer from "./MatchListReducer";
import TeamListReducer from "./TeamListReducer";

export default combineReducers({
  matchlist: MatchListReducer,
  teamlist: TeamListReducer
});
