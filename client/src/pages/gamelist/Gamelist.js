import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "./gamelist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Gamelist extends Component {
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
            <h1>LUBESY'S GAMELIST</h1>
            <p>
              Below is a list of games that I own and am willing to play on
              stream.
            </p>
            <p>As I purchase games, I will add them to this list.</p>
            <p>
              Once every two weeks, we raffle a "Viewer's Pick" game to be
              played on stream the following week. If you are a winner, please
              select one of these games and let me know which you'd like to see
              me play!
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
                For a list of games that I'm giving away, click{" "}
                <a href="/giveaway">here</a>
              </li>
            </ol>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>The 39 Steps</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/307163-the-39-steps-windows-front-cover.jpg"
                alt=""
                title="Prepare to experience the original man-on-the-run thriller in a completely new way! There are secrets to be discovered, locations to be explored and - above all - an incredible tale to be told in this ground-breaking interactive novel."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=oWOuXKxoU34"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>AaaaaAAaaaAAAaaAAAAaAAAAA!!! for the Awesome</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://steamcdn-a.akamaihd.net/steam/apps/15560/capsule_616x353.jpg?t=1458837534"
                alt=""
                title="82 remastered levels from the original and 43 brand new ones that are twice as fast!"
              />
              {/* change me x2 */}
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=zIuC-w9iAUI"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* change me */}
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Adventures of Shuggy</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/326126-the-adventures-of-shuggy-windows-front-cover.jpg"
                alt=""
                title="Shuggy has just inherited a castle full of goblins, ghouls, zombies, and robots. Help him clear out over 100 rooms to make his new home liveable again!"
              />
              {/* change me x2 */}
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=VbvJzt59zwc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* change me */}
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Age of Empires II</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png/220px-Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png"
                alt=""
                title="Age of Empires II: The Age of Kings is a real-time strategy video game developed by Ensemble Studios and published by Microsoft. Released in 1999 for Microsoft Windows and Macintosh, it is the second game in the Age of Empires series."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=q4Okg0qy5Oc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Age of Empires III</p>
              {/* change me */}
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Aoeiii-cover.jpg/220px-Aoeiii-cover.jpg"
                alt=""
                title="Microsoft Studios brings you three epic Age of Empires III games in one monumental collection for the first time."
              />
              {/* change me x2 */}
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=SSempPDd3ck"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* change me */}
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Amnesia: A Machine for Pigs</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/amnesia/images/3/32/Jessica_Curry_-_Amnesia-_A_Machine_for_Pigs_-_cover.png/revision/latest?cb=20130916150814"
                alt=""
                title="From the creators of Amnesia: The Dark Descent and Dear Esther comes a new first-person horrorgame that will drag you to the depths of greed, power and madness. It will bury its snout into your ribs and it will eat your heart."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=2ZV6Fwx_Sf4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Arma 2</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Arma-2-cover.jpg/220px-Arma-2-cover.jpg"
                alt=""
                title="Building on 10 years of constant engine development, ARMA II boasts the most realistic combat environment in the world. It models real world ballistics & round deflection, materials penetration, features a realtime day/night cycle and dynamic wind, weather and environmental effects."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=UgXq6z6-644"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Assassin's Creed</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Assassin%27s_Creed.jpg/220px-Assassin%27s_Creed.jpg"
                alt=""
                title="Assassin's Creed™ is the next-gen game developed by Ubisoft Montreal that redefines the action genre. While other games claim to be next-gen with impressive graphics and physics, Assassin's Creed merges technology, game design, theme and emotions into a world where you instigate chaos and become a vulnerable, yet powerful, agent of..."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=RjQ6ZtyXoA0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Baldur's Gate</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Baldur%27s_Gate_box.PNG/220px-Baldur%27s_Gate_box.PNG"
                alt=""
                title="The classic adventure returns! Baldur’s Gate: Enhanced Edition includes the original Baldur’s Gate adventure, the Tales of the Sword Coast expansion, and all-new content including three new party members."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=dG-4Gp3XNiw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Battle Group 2</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/570456-battle-group-2-nintendo-switch-front-cover.jpg"
                alt=""
                title="Your battleships are fully loaded with the return of Battle Group. Command the war against advanced pirates with brand new Satellite Strikes and upgrades for your state-of-the-art battleships. As the commanding gunner of this advanced armada, it's imperative you stop a terrifying new foe our world has yet to fathom."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=gK5LE0PAvXM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Betrayer</p>
              <img
                className="game-window"
                src="https://pcgamingwiki.ams3.digitaloceanspaces.com/thumb/9/9b/Betrayer.jpg/300px-Betrayer.jpg"
                alt=""
                title="Betrayer is a first person action adventure game that takes you to the New World at the turn of the 17th century.The year is 1604. You sailed from England expecting to join a struggling colony on the coast of Virginia. Instead, you find only ghosts and mysteries. What catastrophe blighted the land and drained it of color and life?"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=SS3yNcmOPx8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>The Binding of Isaac</p>
              <img
                className="game-window"
                src="https://media.moddb.com/images/groups/1/9/8191/1.jpg"
                alt=""
                title="Now 20% More Evil with the Free Halloween update!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=27Le3kOOFQk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Blades of Time</p>
              <img
                className="game-window"
                src="https://media.moddb.com/images/games/1/20/19127/Blades-of-Time-OE-NR.jpg"
                alt=""
                title="Ayumi, the gorgeous gun and sword-wielding treasure hunter, sets out on a journey to an ancient island in search of new adventures. While rich in bounty, the island is also filled with the magic of Chaos, being at the same time home to blood thirsty monsters."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=F1Pdt2JbsDw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Blockland</p>
              <img
                className="game-window"
                src="https://ih0.redbubble.net/image.14772729.1829/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.jpg"
                alt=""
                title="Blockland is a non-linear sandbox game with no set goals, giving players the freedom to design and construct elaborate structures. Styled as a tiny minifigure, players build inside of the virtual world using bricks reminiscent of toy blocks."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=S0ubB27Qbe0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Borderlands</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Borderlandscover.jpg/220px-Borderlandscover.jpg"
                alt=""
                title="Get ready for the mind blowing insanity! Play as one of four trigger-happy mercenaries and take out everything that stands in your way! With its addictive action, frantic first-person shooter combat, massive arsenal of weaponry, RPG elements and four-player co-op, Borderlands is a breakthrough experience that challenges all the..."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=v3ZWbpce_Os"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Borderlands 2</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/nohud/images/8/82/Borderlands-2_cover.jpg/revision/latest?cb=20150327122711"
                alt=""
                title="The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=y3RShjg6agQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Call of Duty: Black Ops</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/220px-CoD_Black_Ops_cover.png"
                alt=""
                title="The biggest first-person action series of all time and the follow-up to critically acclaimed Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=OPTOVQFRggI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Call of Duty: Modern Warfare 2</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Modern_Warfare_2_cover.PNG/220px-Modern_Warfare_2_cover.PNG"
                alt=""
                title="The most-anticipated game of the year and the sequel to the best-selling first-person action game of all time, Modern Warfare 2 continues the gripping and heart-racing action as players face off against a new threat dedicated to bringing the world to the brink of collapse."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=AzwBeDV5IAY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Calvino Noir</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/393253-calvino-noir-playstation-4-front-cover.jpg"
                alt=""
                title="The film noir stealth game. Calvino Noir is the exploratory, sneaking adventure through the 1930s European criminal underworld. Architecture meets Noir as you become unwillingly entangled in a revolutionist plot."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=fSyLaTZ8-kU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Castle Crashers</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Castle_Crashers_cover.jpg/220px-Castle_Crashers_cover.jpg"
                alt=""
                title="Hack, slash, and smash your way to victory in this award winning 2D arcade adventure from The Behemoth!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=bu6Kwvd695w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Chivalry: Medieval Warfare</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Chivalry_Medieval_Warfare_cover_art.jpg/220px-Chivalry_Medieval_Warfare_cover_art.jpg"
                alt=""
                title="Besiege castles and raid villages in Chivalry: Medieval Warfare, a fast-paced medieval first person slasher with a focus on multiplayer battles"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=tUT0RTrNTW0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Clones</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Clones_dvd_cover.jpg/220px-Clones_dvd_cover.jpg"
                alt=""
                title="Clones is a friendly, fun, and engaging evolution to the classic puzzle genre which includes robust internet-multiplayer and a built-in level editor."
              />
              <a
                className="game-preview"
                href="https://vimeo.com/10525133"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "vimeo-square"]} id="v-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Creeper World 3: Arc Eternal</p>
              <img
                className="game-window"
                src="https://i1.sndcdn.com/artworks-000490962705-bm93oc-t500x500.jpg"
                alt=""
                title="Creeper World 3 is what happens when cellular automata takes over a strategy simulation. Instead of discrete units that attack your base, a fluid-like substance spreads over the terraformable terrain. Your base, your weapons, your strategy... you must adapt them all."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=zM-SZscFQZ4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Crusader Kings II</p>
              <img
                className="game-window"
                src="https://cdn.cdkeys.com/500x706/media/catalog/product/c/r/crusader-kings-ii-pc-get-cheap-cd-key_5_.jpg"
                alt=""
                title="Explore one of the defining periods in world history in an experience crafted by the masters of Grand Strategy."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=qzkVTDfxIUI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Crystals of Time</p>
              <img
                className="game-window"
                src="http://www.screenseven.com/en/img/prv/crystals-of-time_nl.jpg"
                alt=""
                title="Help Ashley Ford find her father and solve the mystery of the Three Oak Mansion. A professional thief, Ashley has inherited this hobby from her father, who suddenly disappeared one night while he was trying to sneak into the Three Oak Mansion. You start the game in front of a big, deserted house that hides a lot of secrets."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=cstglUnsLwU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Cuphead</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/429819-cuphead-windows-apps-front-cover.jpg"
                alt=""
                title="Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=NN-9SQXoi50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Darwinia</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/66777-darwinia-windows-front-cover.jpg"
                alt=""
                title="Combining fast-paced action with strategic battle planning, Darwinia features a novel and intuitive control mechanism, a graphical style ripped from 80's retro classics like Tron and Defender, and a story concerning a tribe of nomadic sprites trapped in a modern 3D world."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=M-D13QOKmd8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Dawn of Man</p>
              <img
                className="game-window"
                src="https://steamcdn-a.akamaihd.net/steam/apps/858810/header.jpg?t=1553899693"
                alt=""
                title="Command a settlement of ancient humans, guide them through the ages in their struggle for survival. Hunt, gather, craft tools, fight, research new techs and face the challenges the environment will throw at you."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=02i1_wXdf7M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Dead Space 2</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/deadspace/images/1/13/DS2_Generic_Cover.jpg/revision/latest?cb=20110130202525"
                alt=""
                title="THE NIGHTMARE RETURNS."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=z7Qy_4sWs3I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Dragon Age: Origins</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/170927-dragon-age-origins-windows-front-cover.jpg"
                alt=""
                title="You are a Grey Warden, one of the last of a legendary order of guardians. With the return of an ancient foe and the kingdom engulfed in civil war, you have been chosen by fate to unite the shattered lands and slay the archdemon once and for all."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=4k81SFkhFG4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Eador: Genesis</p>
              <img
                className="game-window"
                src="http://www.mobygames.com/images/covers/l/284949-eador-genesis-windows-front-cover.jpg"
                alt=""
                title="Eador: Genesis is an indie turn-based strategy game created by Alexey Bokulev. It has inspired the development of Eador: Masters of the Broken World.Take the role of a mighty Master and shape the destiny of Eador, on land and within the astral plane itself."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=JYpCurjIxV0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Eador: Masters of the Broken World</p>
              <img
                className="game-window"
                src="https://pcgamez-download.com/gimgs/eador-masters-of-the-broken-world-mega-uploaded-turbobit/120913-eador-01-1-vv69.jpg"
                alt=""
                title="Eador is a universe made of countless shards of land drifting in the Great Nothing. Each of the shards is a little world unto itself, with geography and denizens of its own. The power over the shards is bitterly contested by Masters, the immortal beings mortals believe to be gods."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=orbOeF4x0yM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Morrowind</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/elderscrolls/images/3/38/Morrowind_Cover.png/revision/latest?cb=20160812144154"
                alt=""
                title="The Elder Scrolls III: Morrowind® Game of the Year Edition includes Morrowind plus all of the content from the Bloodmoon and Tribunal expansions. The original Mod Construction Set is not included in this package. An epic, open-ended single-player RPG, Morrowind allows you to create and play any kind of character imaginable."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=Cr3TCWPlDrw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Oblivion</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/60426-the-elder-scrolls-iv-oblivion-windows-front-cover.jpg"
                alt=""
                title="The Elder Scrolls IV: Oblivion® Game of the Year Edition presents one of the best RPGs of all time like never before. Step inside the most richly detailed and vibrant game-world ever created. With a powerful combination of freeform gameplay and unprecedented graphics, you can unravel the main quest at your own pace or explore the vast..."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=mWLZ07U85h0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Skyrim</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png"
                alt=""
                title="EPIC FANTASY REBORN The next chapter in the highly anticipated Elder Scrolls saga arrives from the makers of the 2006 and 2008 Games of the Year, Bethesda Game Studios. Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=PjqsYzBrP-M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Expeditions: Conquistador</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Expeditions_Conquistador_cover_art.jpg/220px-Expeditions_Conquistador_cover_art.jpg"
                alt=""
                title="Conquer the New world: In the 16th Century, Spanish explorers and soldiers reached the shores of America. The search for gold, fame, and adventure drove these travelers into a treacherous wilderness where they faced hunger, disease, and dangerous predators. In their wake, the Aztec Empires lay in ruins."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=_E8CwIdCkcs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>FEAR</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/1/15/FEAR_DVD_box_art.jpg"
                alt=""
                title="F.E.A.R. First Encounter Assault Recon is a survival horror first-person shooter video game developed by Monolith Productions and published by Vivendi Universal Games and Warner Bros. Games."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=sSme33E8uFM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>FEAR 2: Project Origin</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/FEAR_2_Project_Origin_Game_Cover.jpg/220px-FEAR_2_Project_Origin_Game_Cover.jpg"
                alt=""
                title="F.E.A.R. 2: Project Origin is a first-person shooter horror video game, developed by Monolith Productions and published by Warner Bros. Games for Microsoft Windows, PlayStation 3 and Xbox 360. It is the sequel to F.E.A.R. and is the second game in the F.E.A.R. series."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=bdLv5VGPzRY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>FEAR 3</p>
              <img
                className="game-window"
                src="https://images-na.ssl-images-amazon.com/images/I/71iwI5odwHL._AC_SX215_.jpg"
                alt=""
                title="F.E.A.R. 3 delivers all the hallmarks that define the F.E.A.R. brand: terrifying paranormal experience, frenetic combat and a dramatic storyline."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=1KpKc-i43p8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Galactic Civilizations I</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/GalacticCivilizationsBox.jpg/220px-GalacticCivilizationsBox.jpg"
                alt=""
                title="Galactic Civilizations is a space based strategy game in which you are in control of humanity's destiny."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=Q3l2lh3vqIg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Galactic Civilizations II</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Galactic_Civilizations_II_-_Dread_Lords_Coverart.png/220px-Galactic_Civilizations_II_-_Dread_Lords_Coverart.png"
                alt=""
                title="As leader of a galactic civilization, it is up to you to ensure the triumph of your civilization. Fight wars, design star ships, research new technologies, negotiate treaties and build an empire that will stand the test of time in this award-winning turn-based strategy game."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=GCwNnnUIQ60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Galactic Civilizations III</p>
              <img
                className="game-window"
                src="https://s1.gaming-cdn.com/images/products/915/271x377/galactic-civilizations-iii-cover.jpg"
                alt=""
                title="Build a civilization that will stand the test of time in the largest space-based strategy game ever! Choose from dozens of unique races and make a name for yourself across the galaxy through diplomacy, espionage, technological advances, and more."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=Zs_qG1vPY_s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Half-Life</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Half-Life_Cover_Art.jpg/220px-Half-Life_Cover_Art.jpg"
                alt=""
                title="Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=fCfgJgcEojE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Half-Life 2</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Half-Life_2_cover.jpg/220px-Half-Life_2_cover.jpg"
                alt=""
                title="1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than eight million retail units sold worldwide."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=UKA7JkV51Jw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Heretic: Shadow of the Serpent Riders</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/3553-heretic-shadow-of-the-serpent-riders-dos-front-cover.jpg"
                alt=""
                title="In a twisted medieval dimension, undead creatures and bestial horrors have done the unthinkable--callously slaughtering your entire race. Your friends. Your family. Eliminated. But the nightmare has just begun."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=SHlJxypG-Zc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>HeXen: Beyond Heretic</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Hexenbox.jpg/220px-Hexenbox.jpg"
                alt=""
                title="While you were battling the evil forces of D'Sparil, the other Serpent Riders were busy sowing the seeds of destruction in other dimensions. One such dimension is the decaying world where Hexen takes place. A world littered with the mangled corpses of nonbelievers and inhabited by the undead followers that executed them."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=0wR2AroNTCw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>HeXen: Deathkings of the Dark Citadel</p>
              <img
                className="game-window"
                src="https://images-na.ssl-images-amazon.com/images/I/41TNfQEbFfL.jpg"
                alt=""
                title="Where HeXen Ends, the True Nightmare Begins. Deathkings of the Dark Citadel is the only official expansion of the original HeXen game. This add-on pack features 20 new single player levels from the original HeXen team as well as a host of new multiplayer options."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=7lVJVg7gyls"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>HeXen II</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/HexenIIbox.jpg/236px-HexenIIbox.jpg"
                alt=""
                title="The Four Horsemen of the Apocalypse lurk in the shadows before you. They are Death, Pestilence, Famine, and War. They are the root of all that is evil. They are the least of your worries. The last know Serpent Rider, Eidolon, lives."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=I9D-QlOAFcg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Inquisitor</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Inquisitor_Cover.jpg/220px-Inquisitor_Cover.jpg"
                alt=""
                title="Action-oriented combat with a deep and involving tale of betrayal, torture, madness, and infernal damnation. If a gritty old-school open-ended isometric RPG is what you looking for, look no further. Inquisitor will provide you with hours of gameplay and a dark, involving story."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=ekCC3OsE1Mg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>The Long Dark</p>
              <img
                className="game-window"
                src="https://s3.gaming-cdn.com/images/products/521/271x377/the-long-dark-cover.jpg"
                alt=""
                title="The Long Dark is a thoughtful, exploration-survival experience that challenges solo players to think for themselves as they explore an expansive frozen wilderness in the aftermath of a geomagnetic disaster. There are no zombies -- only you, the cold, and all the threats Mother Nature can muster. Welcome to the Quiet Apocalypse."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=WJ-1O_w2KTg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>McPixel</p>
              <img
                className="game-window"
                src="https://i.ytimg.com/vi/T15fxHNSzO4/maxresdefault.jpg"
                alt=""
                title="McPixel is a save-the-day guy that you guide through 100 short challenges to prevent stuff from blowing up. You have only 20 seconds to save the day! Think quick!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=v0FLuVkk8UI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Mini Ninjas</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Minininjas.jpg/220px-Minininjas.jpg"
                alt=""
                title="Mini Ninjas is a game that combines furious action with stealth and exploration for an experience that appeals to a wide audience across age groups and preferences. It’s an action-adventure with a strong focus on allowing the player freedom to explore the world and has the depth to allow for very varied gameplay and approaches to getting..."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=Fp3xLA99c5Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Multiwinia</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Multiwinia_Coverart.png/220px-Multiwinia_Coverart.png"
                alt=""
                title="Long ago a computer scientist called Dr Sepulveda created a beautiful digital world existing entirely within a computer network of his own invention. This world was called Darwinia and it was inhabited by a peaceful, law-abiding digital life-form called the Darwinians."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=mKalHl_hTP4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>No Time To Explain</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/394265-no-time-to-explain-remastered-xbox-one-front-cover.png"
                alt=""
                title="'I Am You From The Future! No Time To Explain, Follow m-OH CHRIST!' Chase your future self through time and alternate realities while fighting giant monsters, collecting hats, and eating cake! No Time To Explain Remastered is the remake of tinyBuild's debut game. Now with multiplayer!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=J2J30Bz9Pzo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Northgard</p>
              <img
                className="game-window"
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/guqifzispzew1rubnyzd.jpg"
                alt=""
                title="Northgard is a strategy game based on Norse mythology in which you control a clan of Vikings vying for the control of a mysterious newfound continent."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=mDN8PHOYnKc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Abe's Oddysee</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/oddworld/images/d/dc/Abe%27s_Oddysee_HighRes.jpg/revision/latest?cb=20190516171520"
                alt=""
                title="Selected by the fickle finger of fate, Abe™, floor-waxer first class for RuptureFarms, was catapulted into a life of adventure when he overheard plans by his boss, Molluck the Glukkon™, to turn Abe and his fellow Mudokons into Tasty Treats as part of a last-ditch effort to rescue Molluck's failing meat-packing empire."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=tcv2tUynGuQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Abe's Exoddus</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/123657-oddworld-abe-s-exoddus-windows-front-cover.jpg"
                alt=""
                title="Abe's peaceful retirement was shattered when visited by a vision from the Mudokon Spirit Guides. Abe™ learned the Magog Cartel was mining Necrum, the sacred Mudokon city of the dead, to collect bones to make super-addictive SoulStorm Brew."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=eEx8lxXCsU4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Munch's Oddysee</p>
              <img
                className="game-window"
                src="https://pcgamingwiki.ams3.digitaloceanspaces.com/thumb/5/5b/Oddworld_Munchs_Oddysee_Cover.jpg/300px-Oddworld_Munchs_Oddysee_Cover.jpg"
                alt=""
                title="Taking place after the events of Abe's Exoddus, the story begins with a froglike Gabbit named Munch, whose species has been commercially fished to near-extinction by Oddworld's industrious species; their eggs harvested for a delicacy known as 'Gabbiar' and their lungs used as replacements for those of the chain-smoking Glukkons."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=1GUHrTdzGLc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Stranger's Wrath HD</p>
              <img
                className="game-window"
                src="https://pcgamingwiki.ams3.digitaloceanspaces.com/thumb/c/c7/Oddworld_Strangers_Wrath_-_cover.jpg/300px-Oddworld_Strangers_Wrath_-_cover.jpg"
                alt=""
                title="You're the Stranger, a mysterious bounty hunter on a mission to bag the ultimate prize. And you need that money like no one else because there is something very wrong with your health and the only way to fix it is a very costly operation."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=EqSm0jWUm8I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Prey</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/prey/images/2/29/Prey_cover_art.jpg/revision/latest?cb=20160613070203"
                alt=""
                title="In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted."
              />
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=1hKTZGflqrc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://www.twitch.tv/videos/459620725"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Puzzle Kingdoms</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Puzzle_Kingdoms_Coverart.png/220px-Puzzle_Kingdoms_Coverart.png"
                alt=""
                title="Puzzle Kingdoms challenges players to plan out strategic attacks in order to defeat their opponents. Order troops across the map, conquering cities through innovative puzzle gameplay. Players build and manage armies led by heroic commanders to save the world of Etheria from the brink of destruction."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=4hdCcvSMEwQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Puzzle Pirates</p>
              <img
                className="game-window"
                src="http://www.mobygames.com/images/covers/l/265369-yohoho-puzzle-pirates-linux-front-cover.png"
                alt=""
                title="Every activity in Puzzle Pirates is a uniquely fun puzzle: be it sailing, gunning, or hauling treasure, your own puzzling skill determines your success!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=MV0cbsstr8E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Quake</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Quake1cover.jpg/220px-Quake1cover.jpg"
                alt=""
                title="Rage through 32 single player levels and 6 deathmatch levels of sheer terror and fully immersive sound and lighting. Arm yourself against the cannibalistic Ogre, fiendish Vore and indestructible Schambler using lethal nails, fierce Thunderbolts and abominable Rocket and Grenade Launchers."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=DV2vhmtGBqM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Quake II</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Quake2box.jpg/220px-Quake2box.jpg"
                alt=""
                title="Shortly after landing on an alien surface, you learn that hundreds of your men have been reduced to just a few. Now you must fight your way through heavily fortified military installations, lower the city's defenses and shut down the enemy's war machine. Only then will the fate of humanity be known."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=BPIKK-d-BaY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Really Big Sky</p>
              <img
                className="game-window"
                src="https://pcgamingwiki.ams3.digitaloceanspaces.com/thumb/f/f5/Really_Big_Sky_cover.jpg/300px-Really_Big_Sky_cover.jpg"
                alt=""
                title="A super fast, twin analogue shooter for the modern age!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=WTlMLJ6QMuw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Return to Castle Wolfenstein</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/20177-return-to-castle-wolfenstein-game-of-the-year-windows-front-cover.jpg"
                alt=""
                title="World War II rages and nations fall. SS head Himmler has Hitler's full backing to twist science and the occult into an army capable of annihilating the Allies once and for all. Battling alone, you're on an intense mission to pierce the black heart of the Third Reich and stop Himmler -- or die trying."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=2KSnfeZE5xc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Rock of Ages</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Rock_of_ages_xbla.jpg/220px-Rock_of_ages_xbla.jpg"
                alt=""
                title="A rock-solid combination of rock-rolling action, deep strategy, and captivating art and music from different ages of history, this is a game of crush or be crushed!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=FwrANp92iQo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Skyward Collapse</p>
              <img
                className="game-window"
                src="https://cdn-ext.fanatical.com/production/product/original/432377dd-0a5f-4004-beae-50e8cadb9537.jpg?w=1200"
                alt=""
                title="How do you balance -- and indeed encourage -- a war between factions without letting either side obliterate the other? How do you rule over gods, creatures, and men who refuse to obey you? How do you build a landscape of villages when bandits and mythology are conspiring to tear it down?"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=xtm4MUFpPAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Sniper: Ghost Warrior 2</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Sniper_-_Ghost_Warrior_2_coverart.jpg/220px-Sniper_-_Ghost_Warrior_2_coverart.jpg"
                alt=""
                title="Sniper: Ghost Warrior 2 takes the bulls-eye precision of its predecessor to new and exciting heights!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=YJldAdP1DJI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Surprising My Neighbors</p>
              <img
                className="game-window"
                src="https://steamcdn-a.akamaihd.net/steam/apps/1061300/header.jpg?t=1556300543"
                alt=""
                title="Surprising My Neighbors is a first-person game where you are going to leave “surprises” at the doors of your beloved neighbors."
              />
              <a
                className="game-preview"
                href="https://store.steampowered.com/app/1061300/Surprising_My_Neighbors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "steam-square"]} id="steam" />
              </a>
            </div>
            <div className="game-card">
              <p>Thief</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/390319-thief-the-bank-heist-xbox-one-front-cover.png"
                alt=""
                title="Garrett, the Master Thief, steps out of the shadows into the City. In this treacherous place, where the Baron’s Watch spreads a rising tide of fear and oppression, his skills are the only things he can trust. Even the most cautious citizens and their best-guarded possessions are not safe from his reach."
              />
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=PWecZdcVw5I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://www.twitch.tv/videos/431549066"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Thief Gold</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/287240-thief-gold-windows-front-cover.jpg"
                alt=""
                title="Stalk your prey on the quest for stolen goods with your blackjack, sword, and an assortment of unique arrows. Steal for money and uncover the hidden agendas of your allies and enemies as you play through an unravelling story of deception and revenge."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=FICiRs2D2uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Thief 2: The Metal Age</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/e/e4/Thief_II_-_The_Metal_Age_Coverart.png"
                alt=""
                title="The ultimate thief is back! Tread softly as you make your way through 15 new complex, non-linear levels full of loot to steal and guards to outsmart. Improved enemy AI, new gadgets and a riveting story will draw you into the world of Thief™ II: The Metal Age, a place of powerful new technologies, fanatical religions and corruption."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=LEEMhTUnJrM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Thief: Deadly Shadows</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/58693-thief-deadly-shadows-windows-front-cover.jpg"
                alt=""
                title="You are Garrett, the master thief. Rarely seen and never caught, Garrett is the best that ever was. Able to sneak past any guard, pick any lock, and break into the most ingeniously secured residences. Garrett steals from the wealthy and gives to himself, making his living in the dark and foreboding City."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=DjJSxlh4JLc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Trine</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/159696-trine-windows-front-cover.jpg"
                alt=""
                title="Three Heroes make their way through dangers untold in a fairytale world of great castles and strange machinery, featuring physics-based puzzles, beautiful sights and online co-op."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=iXamgP-j-xU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Trine 2</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Trine_2_cover.jpg/220px-Trine_2_cover.jpg"
                alt=""
                title="Three Heroes make their way through dangers untold in a fairytale world of great castles and strange machinery, featuring physics-based puzzles, beautiful sights and online co-op."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=gcuQH3lmin8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Tropico</p>
              <img
                className="game-window"
                src="https://images-na.ssl-images-amazon.com/images/I/61E6KSS6ZNL.AC_SX430_.jpg"
                alt=""
                title="TROPICO RELOADED is the ultimate game compilation for hobby-dictators and those dreaming of their own Caribbean island. Tropico combines real-time strategy and simulation elements with a healthy dose of political intrigue and Caribbean flair to create a unique and critically acclaimed game experience."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=FQd7w-SlMxw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Tropico 2: Pirate Cove</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Tropico2.jpg/220px-Tropico2.jpg"
                alt=""
                title="TROPICO RELOADED is the ultimate game compilation for hobby-dictators and those dreaming of their own Caribbean island. Tropico combines real-time strategy and simulation elements with a healthy dose of political intrigue and Caribbean flair to create a unique and critically acclaimed game experience."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=RUvFSEw6tYM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Tropico 3</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Tropico_3_Box_Art.jpg/220px-Tropico_3_Box_Art.jpg"
                alt=""
                title="Become the dictator of a remote island during the Cold War. Charm, persuade, intimidate, oppress, or cheat your people to stay in power! Are you a kind and generous leader? A corrupt and ruthless tyrant ruling with an iron fist?"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=LuWt2P1Fk4Y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>DOOM</p>
              <img
                className="game-window"
                src="https://www.doomworld.com/pageofdoom/graphics/UltimateDoomPoster.jpg"
                alt=""
                title="The complete megahit game that set the world afire. Plus All-New Episode IV: Thy Flesh Consumed. The demons came and the marines died. Except one. You are the last defense against these hell-spawned hordes. Prepare for the most intense mutant-laden, blood-splattered action ever!"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=BkaC1-QoraY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>DOOM II</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/493-doom-ii-dos-front-cover.jpg"
                alt=""
                title="Two New, 32-Level DOOM II Episodes. Evilution: Far from earth, the UAC recommenced their experiments on on of the moons of Jupiter. A spaceship, mistaken for a supply vexxel on radar, hovered above the base. Hideous demons poured out, blanketing the base with death. All your comrades were quickly slaughtered or zombified."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=tt3E7S8me2E"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>DOOM 3</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/doom/images/0/0e/Coverdoom3-1-.jpg/revision/latest?cb=20060430203735"
                alt=""
                title="Two New, 32-Level DOOM II Episodes. Evilution: Far from earth, the UAC recommenced their experiments on on of the moons of Jupiter. A spaceship, mistaken for a supply vexxel on radar, hovered above the base. Hideous demons poured out, blanketing the base with death. All your comrades were quickly slaughtered or zombified."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=j8NaZZa54cs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Velvet Assassin</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/150062-velvet-assassin-windows-front-cover.jpg"
                alt=""
                title="Inspired by the fascinating story and unbreakable spirit of British secret agent Violette Szabo, players take control of Violette Summer, a beautiful World War II spy deep behind enemy lines with no support or official backing from the British Government."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=85-kN_uRatU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div className="game-row">
            <div className="game-card">
              <p>Wolfenstein 3D</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/13128-wolfenstein-3d-jaguar-front-cover.jpg"
                alt=""
                title="Maybe it was the fact that people got to blow away Nazis. Maybe it was the sheer challenge of it all. For whatever reason, Wolfenstein 3D and Spear of Destiny, pioneered the first-person shooter genre and brought its legendary creators, id Software, worldwide notoriety and numerous awards."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=7P_dic-pSKo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Wolfenstein: The New Order</p>
              <img
                className="game-window"
                src="https://gpstatic.com/acache/25/83/1/us/packshot-539235e2f57bc7f20bcf37b18d501151.jpg"
                alt=""
                title="Wolfenstein®: The New Order reignites the series that created the first-person shooter genre. Under development at Machine Games, a studio comprised of a seasoned group of developers recognized for their work creating story-driven games, Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=JA1QB-h1c4I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Zeno Clash 2</p>
              <img
                className="game-window"
                src="https://m.media-amazon.com/images/M/MV5BODk0MDA3NzMtZjRjYS00N2IxLTkwMmItMDdjZmJiOGQ2OTdjXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
                alt=""
                title="Ghat's story is far from over: Zeno Clash 2 picks up where the deliciously brazen first game left off. After 4 years of waiting, the sequel to the surreal first-person brawler brings more variety in combat and levels, and even more bizarre storytelling into the beguiling world of Zenozoik."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=F6HluCZVfME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>StarCraft II</p>
              <img
                className="game-window"
                src="https://i.pinimg.com/originals/7e/4f/ad/7e4fad15b08387fef840f819b1bd7b2f.jpg"
                alt=""
                title="StarCraft II is a science fiction real-time strategy video game developed and published by Blizzard Entertainment."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=Ff4VIghrTMg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Apex Legends</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg"
                alt=""
                title="Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts."
              />
              <div className="media-wrapper">
                <a
                  className="game-preview"
                  href="https://www.youtube.com/watch?v=innmNewjkuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
                </a>
                <a
                  className="game-preview"
                  href="https://www.twitch.tv/collections/Q-uIW3iZwRXYVA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "twitch"]} id="twitch" />
                </a>
              </div>
            </div>
            <div className="game-card">
              <p>Fallout Nuclear Winter</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/fallout/images/6/65/Nwbanner.png/revision/latest?cb=20190223193441"
                alt=""
                title="Nuclear Winter is an add-on for Fallout 76. Nuclear Winter brings about a new storyline, where players attempt to claim the title of overseer of Vault 51."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=ZvZu49rAiRE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
          <div class="game-row">
            <div className="game-card">
              <p>Getting Over It</p>
              <img
                className="game-window"
                src="https://www.mobygames.com/images/covers/l/441035-getting-over-it-with-bennett-foddy-macintosh-front-cover.jpg"
                alt=""
                title="A game I made for a certain kind of person. To hurt them."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=cCL6tWv_7FM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
            <div className="game-card">
              <p>Cataclysm: DDA</p>
              <img
                className="game-window"
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/Cataclysm_logo_square.png"
                alt=""
                title="Cataclysm: Dark Days Ahead is a turn-based survival game set in a post-apocalyptic world. Struggle to survive in a harsh, persistent, procedurally generated world. Scavenge the remnants of a dead civilization for food, equipment, or, if you are lucky, a vehicle with a full tank of gas to get you the hell out of Dodge. Fight to defeat or escape from a wide variety of powerful monstrosities, from zombies to giant insects to killer robots and things far stranger and deadlier, and against the others like yourself, that want what you have…"
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=GurxnNDl1AU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "youtube-square"]} id="yt-s" />
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Gamelist;
