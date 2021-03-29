import { combineReducers } from "redux";
import covidReducers from "./covidReducers";

const rootReducer = combineReducers({
  covid: covidReducers,
});

export default rootReducer;