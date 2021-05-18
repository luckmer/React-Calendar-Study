import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/global/Index";
import reportWebVitals from "./reportWebVitals";
import { NavBar } from "./exports/Index";
import { Provider } from "react-redux";
import Store from "./utils/Index";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <GlobalStyle />
      <NavBar />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
