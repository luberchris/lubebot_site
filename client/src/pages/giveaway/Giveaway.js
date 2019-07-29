import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
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
              <p>Age of Empires III: Complete Collection</p>
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
            <div className="game-card">
              <p>Prey</p>
              <img
                className="game-window"
                src="https://vignette.wikia.nocookie.net/prey/images/2/29/Prey_cover_art.jpg/revision/latest?cb=20160613070203"
                alt=""
                title="In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted."
              />
              <a
                className="game-preview"
                href="https://www.youtube.com/watch?v=1hKTZGflqrc"
                target="_blank"
                rel="noopener noreferrer"
              >
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
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Giveaway;
