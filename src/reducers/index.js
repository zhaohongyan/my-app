import { combineReducers } from "redux";
import Page1Reducers from "../pages/Page1/reducer";
import Page2Reducers from "../pages/Page2/reducer";

export default combineReducers({ Page1Reducers, Page2Reducers });
