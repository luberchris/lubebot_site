// /client/App.js
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {}

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
