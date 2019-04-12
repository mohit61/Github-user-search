import { combineReducers } from "redux";
import UserDetail from "./reducer_userDetail";

const rootReducer = combineReducers({
  user: UserDetail
});

export default rootReducer;
