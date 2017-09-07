/*  eslint-disable */
import React from "react";
//import { Route } from "react-router-dom";

import NavBar from "../containers/NavBar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
/*  eslint-enable */

const App = () => (
  <div>
    <Header/>
    <NavBar />
    <Main />
    <Footer />
  </div>
);

export default App; 