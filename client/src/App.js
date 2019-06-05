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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dads/:id" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
