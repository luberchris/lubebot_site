import React, { Component } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="navbar">
        <div className="navbar-section">
          {this.props.page ? (
            <a href="/" className="link" id="home-brand-button">
              Home
            </a>
          ) : (
            ""
          )}
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
        <div className="navbar-section">
          <a
            href={this.props.page ? "https://www.twitch.tv/" + this.props.page : "https://www.twitch.tv/"} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />
          </a>
          <h3>{this.props.page ? "/" + this.props.page : ""}</h3>
        </div>
      </div>
    );
  }
}

export default Navbar;
