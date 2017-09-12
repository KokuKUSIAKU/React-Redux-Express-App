/* eslint-disable */
import React from "react";
import NewRecipeList from "./NewRecipeList";
import Slider from "./Slider";

/*  eslint-enable */
const Home = ( props ) => (
  <div className = "home-page">
    <Slider/>
    <NewRecipeList newrecipelist = { props.newrecipes }/>
  </div>
);

export default Home; 