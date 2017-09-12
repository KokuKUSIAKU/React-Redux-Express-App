import { combineReducers } from "redux";
//import {routerReducer} from "react-router-redux"; 

import recipes from "./recipes";
import filter from "./filter";
import newrecipes from "./newrecipes";

const rootReducer = combineReducers({
  recipes,
  filter,
  newrecipes,
});

export default rootReducer; 