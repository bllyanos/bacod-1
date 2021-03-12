import { combineReducers } from "redux";

import budgetReducer from "./budget";

export default combineReducers({ budget: budgetReducer });
