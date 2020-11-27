import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import React from "react";
import StatusView from "./views/status";
import CommandsView from "./views/commands";
import OauthCallback from "./views/OauthCallback";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/status" component={StatusView}/>
      <Route exact path="/commands" component={CommandsView}/>
      <Route exact path="/callback" component={OauthCallback}/>
    </Switch>
  );
}

export default App;
