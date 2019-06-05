import React, { Component } from "react";
import "./page.css";

class Page extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-page">
        <h1>TESTING PAGE</h1>
        <div id="navbar">
          <a href="/lubesy" className="link">
            Lubesy
          </a>
          <a href="/drewbertdoo" className="link">
            DrewbertDoo
          </a>
          <a href="/keeelaan" className="link">
            Keeelaan
          </a>
          <a href="/sethe_1" className="link">
            Sethe_1
          </a>
          <a href="/lessthandennis" className="link">
            LessThanDennis
          </a>
        </div>
        <div className="jumbotron">
          <h1>WELCOME</h1>
        </div>
        <p>test</p>
      </div>
    );
  }
}

export default Page;
