import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from './Details'

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Link to="/">
          <h1 id="something-important">Adopt Me!</h1>
        </Link>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
