import React, { Component } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  componentDidMount() {
    console.log(this.props.page);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="navbar">
        <div className="navbar-section">
          <a href="/" className="link" id="home-brand-button">
            Home
          </a>
          <a href="/team" className="link">
            Team
          </a>
          <a href="/checklist" className="link">
            Checklist
          </a>
        </div>
        <div className="navbar-section">
          <a
            href={
              this.props.page
                ? "https://www.twitch.tv/" + this.props.page
                : "https://www.twitch.tv/"
            }
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
