import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import React from "react";
import StatusView from "./views/status";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/status" component={StatusView}/>
    </Switch>
  );
}

export default App;
