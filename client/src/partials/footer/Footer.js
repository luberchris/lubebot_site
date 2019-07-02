import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="footer">
        <hr />
        <div id="site-info">
          <div className="site-info-section">
            <h4>Art</h4>
            <a href="/" target="_blank">Splash!</a>
            <a href="https://www.itshalfpint.com/" target="_blank" rel="noopener noreferrer">Halfpint</a>
          </div>
          <div className="site-info-section">
            <h4>Site Development</h4>
            <a href="https://github.com/luberchris/lubebot_site" target="_blank" rel="noopener noreferrer">Github</a> 
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>
            <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>
            <a href="https://dev.twitch.tv/" target="_blank" rel="noopener noreferrer">Twitch Developer</a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>
            <a href="http://chrisluber.com" target="_blank" rel="noopener noreferrer">Chris Luber</a>
          </div>
          <div className="site-info-section">
            <h4>Team</h4>
            <a href="https://twitch.tv/keeelaan">Keeelaan</a>
            <a href="https://twitch.tv/drewbertdoo">Drewbertdoo</a>
            <a href="https://twitch.tv/lessthandennis">LessThanDennis</a>
            <a href="https://twitch.tv/sethe_1">Sethe_1</a>
            <a href="https://twitch.tv/lubesy">Lubesy</a>
          </div>
        </div>
        <br />
        Made using <FontAwesomeIcon icon={["fab", "github"]} /> and{" "}
        <FontAwesomeIcon icon={["fab", "react"]} />
      </div>
    );
  }
}

export default Footer;
