import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="footer">
        MADE USING <FontAwesomeIcon icon={["fab", "github"]} /> AND{" "}
        <FontAwesomeIcon icon={["fab", "react"]} />
      </div>
    );
  }
}

export default Footer;
