import React from "react";

const Ingredients = ( props ) => (
  <div >
    <ul className="ingredient-list" role="list">
      {props.ingredients.map(( ingredient, index ) =>
        <li className="ingredient" key={ index } role="listitem">{ ingredient }</li>)}
    </ul>
  </div>
);

export default Ingredients;