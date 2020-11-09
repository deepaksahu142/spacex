import React from "react";
import { Route, Switch } from "react-router-dom";
import SpacexListComponent from "./components/SpacexListComponent/SpacexListComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import FilteredComponent from "./components/FilteredComponent/FilteredComponent";

const routes = (
  <Switch>
  <Route exact path="/" component={HomeComponent}></Route>
  <Route exact path="/:year" component={FilteredComponent}></Route>
  <Route exact path="*" component={() => "not found"} />
</Switch> 
);



export default routes;
