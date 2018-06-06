import React from "react";
import { Switch, Route } from "react-router-dom";
import Internets from "./components/Internets/Internets";
import List from "./components/List/List";

export default (
  <Switch>
    <Route exact path="/" component={Internets} />
    <Route path="/list" component={List} />
  </Switch>
);
