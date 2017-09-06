
import React from "react";
import { render } from "react-dom"; 
//require( "./styles/style.css" );


const router = (
  <div>
    <header class="header"> Header </header>
    <main> Main </main>
    <footer>footer </footer>
  </div>
)

render(
  router,
  document.getElementById( "app" ) 
); 
