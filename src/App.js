import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import React from "react";
import StatusView from "./views/status";
import CommandsView from "./views/commands";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/status" component={StatusView}/>
      <Route exact path="/commands" component={CommandsView}/>
    </Switch>
  );
}

export default App;
