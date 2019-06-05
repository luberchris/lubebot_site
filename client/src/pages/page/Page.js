import React, { Component } from "react";
import Navbar from "../../partials/navbar/Navbar";
import "./page.css";

class Page extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-page">
        <h1>TESTING PAGE</h1>
        <Navbar />
        <div className="jumbotron">
          <h1>WELCOME</h1>
        </div>
        <p>test</p>
      </div>
    );
  }
}

export default Page;
