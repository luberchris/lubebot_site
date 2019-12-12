import React, { Component } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user };
  }

  componentDidMount() {
    // const {
    //   match: { params }
    // } = this.props;
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
              `${this.state}`
                ? `https://www.twitch.tv/${this.state}`
                : `https://www.twitch.tv/`
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
