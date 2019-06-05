import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import "./home.css";

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="home-page">
        <Navbar />
        <div className="jumbotron">
          <h1>WELCOME</h1>
        </div>
        <p>test</p>
      </div>
    );
  }
}

export default Home;
