import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Top } from "../Top/Top";
import { Works1 } from "../Works1/Works1";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Route path="/" component={Top} />
    <Route path="/" component={Works1} />
  </BrowserRouter>
);

export default App;
