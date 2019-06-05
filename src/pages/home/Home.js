import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="home-page">
        <div id="navbar">
          <a href="https://www.twitch.tv/lubesy" className="link">
            Lubesy
          </a>
          <a href="https://www.twitch.tv/drewbertdoo" className="link">
            DrewbertDoo
          </a>
          <a href="https://www.twitch.tv/keeelaan" className="link">
            Keeelaan
          </a>
          <a href="https://www.twitch.tv/sethe_1" className="link">
            Sethe_1
          </a>
          <a href="https://www.twitch.tv/lessthandennis" className="link">
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

export default Home;
