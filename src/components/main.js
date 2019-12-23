import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Connect from "./connect";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/connect" component={Connect} />
  </Switch>
);
export default Main;
