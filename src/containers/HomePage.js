/*  eslint-disable */
import React from "react";
/*  eslint-enable */

import { connect } from "react-redux";
import Home from "../components/Home";

function mapStateToProps( state ) {
  var newrecipes;
  if ( state.newrecipes && state.newrecipes.length ) {
    newrecipes = state.newrecipes.map(( val ) => state.recipes[val]);
  } else {
    newrecipes = [];
  }

  return {
    newrecipes
  };
}

const HomePage = connect(
  mapStateToProps
)( Home );

export default HomePage;