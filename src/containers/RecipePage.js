/*  eslint-disable */
import React from "react";
/* eslitn-enable */

import RecipeList from "../components/RecipeList";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../actions";

function mapStateToProps( state ) {
  var recipes = state.filter == "all" || !state.filter ? state.recipes : state.recipes.filter(recipe => recipe.type === state.filter);
  return {
    recipes,
    filter: state.filter
  };
}


function mapDispachToProps( dispatch ) {
  return bindActionCreators( actionCreators, dispatch );
}

const RecipePage = connect(
  mapStateToProps
)( RecipeList );

export default RecipePage; 