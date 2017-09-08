/* eslint-disable */
import Recipe from "./Recipe";
/*  eslint-enable */

import React from "react";
import PropTypes from "prop-types";

// return to pure visual component after focus manage issue solved !!
class RecipeList extends React.Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
    // this exacted only first time recipeList is mount
    // subsequent focuses are managed by app.js
    document.querySelector("#listofrecipes").focus();
  }

  render() {
    const props = Object.assign({}, this.props);
    const list = props.recipes.map(( recipe, index ) =>
      <div className="grid-recipe" key={ index } >
        <Recipe recipe={ recipe } routing={ true } key={ index } index={ index } title="bottom" />
      </div>
    );
    return (
      <section className="recipe-list" aria-labelledby="listofrecipes">
        <header >
          <h2 id="listofrecipes" tabIndex={ -1 }>List of Recipes</h2>
        </header>
        { list }
      </section>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList; 