import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Top } from "../Top/Top";
import { Works } from "../Works/Works";

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Top} />
      <Route path="/" component={Works} />
    </div>
  </BrowserRouter>
);

export default App;
