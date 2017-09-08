/* eslint-disable */
import React from "react";
import { Route } from "react-router-dom";

/* eslint-enable */

import HomePage from "../containers/HomePage";
import RecipePage from "../containers/RecipePage";
import SingleRecipePage from "../containers/SingleRecipePage";


const Main = () => (
  <main id="main" >
    <Route exact path="/" component={HomePage} />
    <Route exact path="/:recipeType" component={RecipePage} />
    <Route exact path="/:recipeType/:id" component={SingleRecipePage} />

  </main>
);

export default Main; 