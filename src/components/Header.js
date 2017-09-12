/* eslint-disable */
import React from "react";
import Logo from "./Logo";
/* eslint-enable */

const Header = () => (
  <header className = "header">
    <span className = "site-message sm-hidden">Cooking Amateurs' community</span>
    <button className = "nv-toggle lg-hidden sm-show" ></button>
    <Logo/>
    <div className = "sc-media-icons">
      <span className = "sm-hidden">Follow Us :</span>
      <ul role = "group">
        <li className = "sc-media-item" role = "listitem"><a href = "https://facebook.com"><i className = "fa fa-facebook" aria-hidden = "true"></i></a></li>
        <li className = "sc-media-item" role = "listitem"><a href = "https://twitter.com"><i className = "fa fa-twitter" aria-hidden = "true"></i></a></li>
        <li className = "sc-media-item" role = "listitem"><a href = "https://instagram.com"><i className = "fa fa-instagram" aria-hidden = "true"></i></a></li>
      </ul>
    </div>
  </header>
);
export default Header;