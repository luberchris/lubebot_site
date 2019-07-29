import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Page from "./pages/page/Page";
import Info from "./pages/info/Info";
import Team from "./pages/team/Team";
import Checklist from "./pages/checklist/Checklist";
import Gamelist from "./pages/gamelist/Gamelist";
import Giveaway from "./pages/giveaway/Giveaway";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dads" component={Team} />
        <Route exact path="/dads/:user" component={Page} />
        <Route exact path="/dads/:user/:info" component={Info} />
        <Route exact path="/checklist" component={Checklist} />
        <Route exact path="/gamelist" component={Gamelist} />
        <Route exact path="/giveaway" component={Giveaway} />
      </Switch>
    </Router>
  );
}

export default App;
