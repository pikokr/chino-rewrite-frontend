import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import React from "react";
import StatusView from "./views/status";
import CommandsView from "./views/commands";
import OauthCallback from "./views/OauthCallback";
import Guilds from "./views/Servers";
import InviteCallback from "./views/InviteCallback";
import DashboardView from "./views/Servers/Dashboard";
import MusicSettings from "./views/Servers/Dashboard/Music";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/status" component={StatusView}/>
      <Route exact path="/commands" component={CommandsView}/>
      <Route exact path="/callback" component={OauthCallback}/>
      <Route exact path="/invite/callback" component={InviteCallback}/>
      <Route exact path="/servers" component={Guilds}/>
      <Route exact path="/servers/:id" component={DashboardView}/>
      <Route exact path="/servers/:id/music" component={MusicSettings}/>
    </Switch>
  );
}

export default App;
