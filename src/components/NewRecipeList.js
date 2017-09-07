/*  eslint-disable */
import React from 'react';
import NewRecipe from './NewRecipe';
import PropTypes from 'prop-types'
/* eslint-enable */

const NewRecipeList = (props) => (
  <section aria-labelledby="newrecipes">
    <article className="new-recipe-list">
      <header className="new-recipe-header">
        <h2 id="newrecipes" tabIndex={0}>Recipes of the week !</h2>
        <p> Morbi lectus turpis, pulvinar at diam eget, tempus congue dolor. </p>
      </header>
      {props.newrecipelist.map((recipe, index) => <NewRecipe recipe={recipe} key={index} />)}
    </article>
  </section>
);

NewRecipeList.propTypes = {
  newrecipelist: PropTypes.array.isRequired,
};
export default NewRecipeList;