import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "../gamelist/gamelist.css";
import "./giveaway.css";
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
            <p>Below is a list of games that I will be giving away!</p>
            <p>
              As I acquire codes and Humble Bundles, I will add them to the
              list.
            </p>
            <p>
              Once every two weeks, we raffle a chance to win a game! If you are
              a winner, please select one of these games and let me know which
              you'd like to recieve. Once you claim the code, let me know if it
              worked!
            </p>
            <br />
            <div id="tips-and-winners">
              <div id="tips-section">
                <h2>TIPS</h2>
                <ol>
                  <li>Hover over a game cover to see its description</li>
                  <li>
                    Click the{" "}
                    <div className="media-wrapper">
                      <FontAwesomeIcon
                        icon={["fab", "youtube-square"]}
                        id="yt-s"
                      />{" "}
                      <FontAwesomeIcon
                        icon={["fab", "steam-square"]}
                        id="steam"
                      />{" "}
                      <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />{" "}
                      or{" "}
                      <FontAwesomeIcon
                        icon={["fab", "vimeo-square"]}
                        id="v-s"
                      />
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
              <div id="giveaway-section">
                <h2>PAST WINNERS</h2>
                <ul>
                  <li>ealonmann</li>
                  <li>hasagiotp</li>
                </ul>
              </div>
            </div>
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
            <div className="game-card">
              <p>The Adventure Pals</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxy5dKT1L.ec5XfvGeNW8CIjx1mRoKq2ikbvFn5JezwTQEYsut05wPRbFq.hzLQT67Nl3EIaub1idsUEXjqycxWkdF28lCb20v9JegHZE.fhPpe.FfgH.rsiI8BPomupVYcuCSBkeEsXBdZgmCmBq2H_k3FIezNORnlO0Jq9mcxk-&w=200&h=300&format=jpg"
                alt=""
                title="The Super Adventure Pals series is back for another action-packed story, but this time the stakes are higher, the characters are wackier and the pets are more… giraffeier?"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=LVOyq-W6A_o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/396710/The_Adventure_Pals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Almost There: The Platformer</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1j47.jpg"
                alt=""
                title="Sprint between saw blades while dodging homing missiles. Duck under lasers while the floor crumbles beneath you. Almost There was designed specifically for fans of the hardcore platforming genre - you've been warned."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=tQIJj7gEoQ4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/951940/Almost_There_The_Platformer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Rising Storm 2: Vietnam</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.g2a.com/newlayout/323x433/1x1x0/641ccfce9e55/59e772025bafe336de4cd894"
                alt=""
                title="Red Orchestra Series' take on Vietnam: 64-player MP matches; 20+ maps; US Army & Marines, PAVN/NVA, NLF/VC; Australians and ARVN forces; 50+ weapons; 4 flyable helicopters; mines, traps and tunnels; Brutal. Authentic. Gritty. Character customization. And napalm in the morning."
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=YqyeNcNKxXs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/418460/Rising_Storm_2_Vietnam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Swords and Soldiers 2 Shawarmageddon</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/pqzufh6wzfhjs9ctpt0a.jpg"
                alt=""
                title="Take command of mighty Vikings, sly Persians or brutish Demons! Destroy your opponent’s base while defending your own in this action-packed side-scrolling RTS!"
              />
              {/* change me x2 */}
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=9Qu-YxDrtGs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* change me */}
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://store.steampowered.com/app/703880/Swords_and_Soldiers_2_Shawarmageddon/"
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
