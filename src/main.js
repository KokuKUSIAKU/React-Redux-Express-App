/*  eslint-disable */
import React from "react";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
/* eslint-enable */

import { render } from "react-dom";

const router = (
  <App/>
);

render(
  router,
  document.getElementById("app")
);