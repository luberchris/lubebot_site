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
        <div id="game-intro">
            <h1>LUBESY'S GIVEAWAY LIST</h1>
            <p>
              Below is a list of games that I will be giving away.
            </p>
            <p>As I acquire codes and Humble Bundles, I will add them to the list.</p>
            <p>
              Once every two weeks, we raffle a chance to win a game! If you are a winner, please
              select one of these games and let me know which you'd like to recieve. Once you claim the code, 
              let me know if it worked!
            </p>
            <br />
            <h2>TIPS</h2>
            <ol>
              <li>Hover over a game cover to see its description</li>
              <li>
                Click the{" "}
                <div className="media-wrapper">
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />{" "}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />{" "}
                  <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" /> or{" "}
                  <FontAwesomeIcon icon={["fab", "vimeo-square"]} id="v-s" />
                </div>{" "}
                to see gameplay or a trailer
              </li>
              <br />
              <li>
                For a list of games that I might play on stream, click{" "}
                <a href="/gamelist">here</a>
              </li>
            </ol>
          </div>
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
