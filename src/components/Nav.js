/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
/*  eslint-enable */

const Nav = ( props ) => (
  <nav className="navbar" aria-label="Site menu">
    <ul className="menu">
      <li className="menuItem"><Link to="/" aria-current="page">HOME</Link></li>
      <li className="menuItem"><Link to="/all" onClick={props.setFilter.bind(this, "all")}>RECIPES</Link></li>
      <li className="menuItem"><Link to="/starters" onClick={props.setFilter.bind(this, "starter")} >STARTERS</Link></li>
      <li className="menuItem"><Link to="/main-recipes" onClick={props.setFilter.bind(null, "main")}>MAINS</Link></li>
      <li className="menuItem"><Link to="/deserts" onClick={props.setFilter.bind(null, "desert")}>DESERTS</Link></li>
    </ul>
  </nav>
);

export default Nav; 