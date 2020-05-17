import { combineReducers } from "redux";

import domains from "./domains";
import history from "./history"

export default combineReducers({
  domains,
  history
});