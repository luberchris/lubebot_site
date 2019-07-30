import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "../gamelist/gamelist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Giveaway extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const {
    //   match: { params }
    // } = this.props;
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="page-giveaway">
        {/* <Navbar /> */}
        <div className="game-container">
          <div className="game-row">
            <div className="game-card">
              <p>Surviving Mars</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/462054-surviving-mars-first-colony-edition-xbox-one-front-cover.jpg"
                alt=""
                title="There will be challenges to overcome. Execute your strategy and improve your colony’s chances of survival while unlocking the mysteries of this alien world. Are you ready? Mars is waiting for you."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=MnIIJX8cV2M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/464920/Surviving_Mars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Giveaway;
