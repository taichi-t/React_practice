import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home/Home";
import Work1 from "../Work1/Work1";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Route path="/" component={Home} exact />
    <Route path="/work1" component={Work1} exact />
  </BrowserRouter>
);

export default App;
