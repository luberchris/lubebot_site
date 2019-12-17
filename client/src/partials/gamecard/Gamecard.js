import React, { Component } from "react";
import "./gamecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Gamecard extends Component {
  componentDidMount() {
    this.state = {
      img: this.props.image,
      desc: this.props.description,
      vid: this.props.video,
      steam: this.props.steampage
    };
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="game-card">
          <p>{this.props.name}</p>
        <img
          className="game-window"
          src={this.props.image}
          alt=""
          title={this.props.description}
        />
        {/* change me x2 */}
        <div className="media-wrapper">
          <a
            className="game-preview"
            href={this.props.video}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* change me */}
            <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
          </a>
          <a
            className="game-preview"
            href={this.props.steampage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* change me */}
            <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
          </a>
        </div>
      </div>
    );
  }
}

export default Gamecard;
