/* eslint-disable */

import React from "react";

/* eslint-enable */

import { render } from "react-dom"; 

const router = (
  <div>
    <header class="header">Header</header>
    <main> Main </main>
    <footer>footer </footer>
  </div>
);

render(
  router,
  document.getElementById( "app" ) 
); 
