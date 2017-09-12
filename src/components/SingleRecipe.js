/*  eslint-disable */
import React from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
/* eslint-enable */

const SingleRecipe = ( props ) => {
  const { id } = props.match.params;
  const name = id.split("-").join(" "); 
  const index = props.recipes.findIndex( recipe => recipe.name == name );
  const recipe = props.recipes[index];
  
  return (
    <div className = "single-recipe">
      <div className = "recipe-wrap single-recipe-div">
        <div className = "recipe-box">
          <Recipe recipe = { recipe } title = "top" routing = { false }/>
        </div>
      </div>
      <div className = "ingredients single-recipe-div">
        <header>
          <h2 className = "ingredient-header">Ingredients</h2>
        </header>
        <Ingredients ingredients = { recipe.ingredients }/>
      </div>
    </div>
  );
};

export default SingleRecipe; 