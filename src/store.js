import { createStore } from "redux";
import rootReducer from "./reducers/index";
import recipes from "./data/recipes";

const filter = "";
const newrecipes = [7, 6, 2];
const defaultState = {
  recipes,
  filter,
  newrecipes
};

const store = createStore( rootReducer, defaultState );
export default store; 