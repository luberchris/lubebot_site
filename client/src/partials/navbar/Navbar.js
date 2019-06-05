import React, { Component } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="navbar">
        <div class="navbar-section">
          <a href="/dads/lubesy" className="link">
            Lubesy
          </a>
          <a href="/dads/drewbertdoo" className="link">
            DrewbertDoo
          </a>
          <a href="/dads/keeelaan" className="link">
            Keeelaan
          </a>
          <a href="/dads/sethe_1" className="link">
            Sethe_1
          </a>
          <a href="/dads/lessthandennis" className="link">
            LessThanDennis
          </a>
        </div>
        <div class="navbar-section">
          <a
            href="https://www.twitch.tv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
