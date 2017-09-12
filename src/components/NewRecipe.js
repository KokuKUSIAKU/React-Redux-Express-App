/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/*  eslint-enable */
const NewRecipe = ( props ) => {
  const id = props.recipe.name.split(" ").join("-");
  return (
    <div className = "grid-new-recipe">
      <div className = "new-recipe">
        <img className = "fullwidth-img" src = { props.recipe.image } alt = ""/>
      </div>
      <div className = "user-profile">
        <div className = "user-pic">
          <i className = "fa fa-user" aria-hidden = "true"></i>
        </div>
      </div>
      <p className = "user-name">By Name</p>
      <Link to = { `/recipes/${id}` } style = {{ textDecorationLine: "none" }}>
        <h3>{ props.recipe.name }</h3>
      </Link>
    </div>
  );
};
NewRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default NewRecipe;