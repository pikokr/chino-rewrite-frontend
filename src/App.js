import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import React from "react";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}

export default App;
