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
        <div class="navbar-section">
          <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
