/* eslint-disable */
import React from "react";
/* eslint-enable */

import SingleRecipe from "../components/SingleRecipe";
import { connect } from "react-redux";

function mapStateToProps( state ) {
  var recipes = state.filter == "all" || !state.filter ? state.recipes : state.recipes.filter( recipe => recipe.type === state.filter );
  return {
    recipes,
    filter: state.filter
  };
}

const SingleRecipePage = connect(
  mapStateToProps
)( SingleRecipe );

export default SingleRecipePage; 