/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";

/*  eslint-enable */

import PropTypes from "prop-types";

// to be splited and use oop for scalable component
// return object of components

const Recipe = ( props ) => {
  const id = props.recipe.name.split(" ").join("-");
  const _linkComponent = (
    <div className="recipe" id={ id }>
      {
        props.title === "top" &&
        <Link to={ `/recipes/${id}` } style={{ textDecorationLine: "none" }}>
          <h2>{ props.recipe.name }</h2>
        </Link>
      }

      <Link to={ `/recipes/${id}` } style={{ textDecorationLine: "none" }}>
        <img className="fullwidth-img"
          src={ props.recipe.image }
          alt={ props.recipe.description ? props.recipe.description : props.recipe.name } />
      </Link>

      {
        props.title === "bottom" &&
        <Link to={ `/recipes/${id}` } style={{ textDecorationLine: "none" }}>
          <h3>{ props.recipe.name }</h3>
        </Link>
      }
    </div>
  );

  const _simpleComponent = (
    <div className="recipe" id={ id }>
      { props.title === "top" && <h2>{ props.recipe.name }</h2>}
      <img className="fullwidth-img"
        src={ props.recipe.image }
        alt={ props.recipe.description ? props.recipe.description : props.recipe.name } />
      { props.title === "bottom" && <h3>{ props.recipe.name }</h3> }
    </div>
  );
  
  return props.routing ? _linkComponent:_simpleComponent;
};

// title should have top o bottom value only to be added
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  title: PropTypes.oneOf(["top", "bottom"]),
  routing: PropTypes.bool.isRequired
};

export default Recipe;