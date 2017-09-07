/*  eslint-disable */
import React from "react";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
/* eslint-enable */

import store from "./store";
import { render } from "react-dom";

const router = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById("app")
);