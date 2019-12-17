import React, { Component } from "react";
// import Navbar from "../../partials/navbar/Navbar";
import Footer from "../../partials/footer/Footer";
import "../gamelist/gamelist.css";
import "./giveaway.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gamecard from "../../partials/gamecard/Gamecard";
import Humble from "../../assets/PartnerStampWhite.png";

const redText = {
  color: "red"
};

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
                  <li>liquidorigami</li>
                  <li>indexhtmll</li>
                  <li>bonjwamoosh</li>
                  <li>drewbertdoo</li>
                  <li>keeelaan</li>
                  <li>lessthandennis</li>
                  <li>hasagiotp</li>
                  <li>ealonmann</li>
                </ul>
              </div>
              <div id="humble-partner">
                <a
                  href={
                    "https://www.humblebundle.com/subscription?partner=lubesy&charity=1474961"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="humble-logo" src={Humble} />
                </a>
              </div>
            </div>
          </div>
          {/* <Gamecard
              name={}
              image={}
              description={}
              video={}
              steampage={}
                          /> */}
          <div id="warning">
            <p>
              If this list appears as black text on a white screen and you are
              using a laptop, computer, or tablet, zoom this webpage out
            </p>
            <p style={redText}>
              <br />
              [CTRL/⌘ -] or [CTRL/⌘ Scroll Down]
            </p>
            <p>
              <br />
              until a detailed webpage appears.
            </p>
            <br />
            <hr />
          </div>
          <div className="game-row">
            <Gamecard
              name={"Sonic Mania"}
              image={
                "https://gpstatic.com/acache/32/88/1/us/packshot-72352d14bca26ab7aaf68b9832882eda.jpg"
              }
              description={
                "Sonic Mania is an all-new adventure with Sonic, Tails, and Knuckles full of unique bosses, rolling 2D landscapes, and fun classic gameplay."
              }
              video={"https://www.youtube.com/watch?v=VYQNnrccbj8"}
              steampage={
                "https://store.steampowered.com/app/584400/Sonic_Mania/"
              }
            />
            <Gamecard
              name={"The Adventure Pals"}
              image={
                "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcxy5dKT1L.ec5XfvGeNW8CIjx1mRoKq2ikbvFn5JezwTQEYsut05wPRbFq.hzLQT67Nl3EIaub1idsUEXjqycxWkdF28lCb20v9JegHZE.fhPpe.FfgH.rsiI8BPomupVYcuCSBkeEsXBdZgmCmBq2H_k3FIezNORnlO0Jq9mcxk-&w=200&h=300&format=jpg"
              }
              description={
                "The Super Adventure Pals series is back for another action-packed story, but this time the stakes are higher, the characters are wackier and the pets are more… giraffeier?"
              }
              video={"https://www.youtube.com/watch?v=LVOyq-W6A_o"}
              steampage={
                "https://store.steampowered.com/app/396710/The_Adventure_Pals/"
              }
            />
            <Gamecard
              name={"Almost There: The Platformer"}
              image={
                "https://images.igdb.com/igdb/image/upload/t_cover_big/co1j47.jpg"
              }
              description={
                "Sprint between saw blades while dodging homing missiles. Duck under lasers while the floor crumbles beneath you. Almost There was designed specifically for fans of the hardcore platforming genre - you've been warned."
              }
              video={"https://www.youtube.com/watch?v=tQIJj7gEoQ4"}
              steampage={
                "https://store.steampowered.com/app/951940/Almost_There_The_Platformer/"
              }
            />
            <Gamecard
              name={"Swords and Soldiers 2 Shawarmageddon"}
              image={
                "https://images.igdb.com/igdb/image/upload/t_cover_big/pqzufh6wzfhjs9ctpt0a.jpg"
              }
              description={
                "Take command of mighty Vikings, sly Persians or brutish Demons! Destroy your opponent’s base while defending your own in this action-packed side-scrolling RTS!"
              }
              video={"https://www.youtube.com/watch?v=9Qu-YxDrtGs"}
              steampage={
                "https://store.steampowered.com/app/703880/Swords_and_Soldiers_2_Shawarmageddon/"
              }
            />
            <Gamecard
              name={"MOTHERGUNSHIP"}
              image={
                "https://www.mobygames.com/images/covers/l/494697-mothergunship-xbox-one-front-cover.jpg"
              }
              description={
                "MOTHERGUNSHIP is a bullet-hell FPS where you craft your own guns, fight gigantic bosses, and defeat a robotic alien armada that conquered Earth. Face off against overwhelming odds in brutal, non-stop combats where thinking on your feet is the only way to survive."
              }
              video={"https://www.youtube.com/watch?v=6DPW5tRU6bo"}
              steampage={
                "https://store.steampowered.com/app/574090/MOTHERGUNSHIP/"
              }
            />
          </div>
          <div className="game-row">
            <Gamecard
              name={"11-11 Memories Retold"}
              image={
                "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/11-11_Memories_Retold_cover_art.jpg/220px-11-11_Memories_Retold_cover_art.jpg"
              }
              description={
                "11th November 1916, a young photographer leaves Canada to join the western front in Europe. The same day, a German technician is told that his son is missing in action. Both want to preserve their humanity and come back alive to their loved ones."
              }
              video={"https://www.youtube.com/watch?v=szaxxU6j3D8"}
              steampage={
                "https://store.steampowered.com/app/735580/1111_Memories_Retold/"
              }
            />
            <Gamecard
              name={"Crash Bandicoot N. Sane Trilogy"}
              image={
                "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg/220px-Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg"
              }
              description={
                "Your favorite marsupial, Crash Bandicoot™, is back! He’s enhanced, entranced and ready-to-dance with the N. Sane Trilogy. Relive all your favorite moments in Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back and Crash Bandicoot™ 3: Warped, now in fully-remastered graphical glory!"
              }
              video={"https://www.youtube.com/watch?v=r5yAjgP2vnM"}
              steampage={
                "https://store.steampowered.com/app/731490/Crash_Bandicoot_N_Sane_Trilogy/"
              }
            />
            <Gamecard
              name={"Evergarden"}
              image={
                "https://www.appunwrapper.com/wp-content/uploads/2018/08/image-548-copy-95.jpg"
              }
              description={
                "Escape into a mysterious world of puzzles that will awaken your mind, and quiet your soul."
              }
              video={"https://www.youtube.com/watch?v=DiWOp5BqSjo"}
              steampage={
                "https://store.steampowered.com/app/576500/Evergarden/"
              }
            />
            <Gamecard
              name={"Shenmue I & II"}
              image={
                "https://steamcdn-a.akamaihd.net/steam/apps/758330/capsule_616x353.jpg"
              }
              description={
                "SEGA®’s most requested re-release of all time finally comes to a new generation. Shenmue delivers an epic story of revenge within a unique open world that is still unrivalled in depth and detail. Return to the epic saga that defined modern gaming. The saga begins…again."
              }
              video={"https://www.youtube.com/watch?v=l3jkX6XaYa0"}
              steampage={
                "https://store.steampowered.com/app/758330/Shenmue_I__II/"
              }
            />
            <Gamecard
              name={"Planet Alpha"}
              image={
                "http://t1.gstatic.com/images?q=tbn:ANd9GcQN2lTxHtbJB9GwH0pxz0ozNESYdJzOHViPqTb161d62UHEvWnR"
              }
              description={
                "PLANET ALPHA, a beautiful alien world filled with mystery and danger. Pursued by relentless enemies, you must harness the power of night and day as you struggle to survive."
              }
              video={"https://www.youtube.com/watch?v=gsS0aE_aO9Q"}
              steampage={
                "https://store.steampowered.com/app/485030/PLANET_ALPHA/"
              }
            />
          </div>
          <div className="game-row">
            <Gamecard
              name={"Spyro Reignited Trilogy"}
              image={
                "https://images.g2a.com/newlayout/323x433/1x1x0/6b234b06d72c/5d1092a47e696c77c50b3413"
              }
              description={
                "Same sick burns, same smoldering attitude, now all scaled up in stunning HD, Spyro is back in the Spyro™ Reignited Trilogy! Rekindle the fire with remastered versions of the original three games, Spyro™ the Dragon, Spyro™ 2: Ripto's Rage! and Spyro™: Year of the Dragon."
              }
              video={"https://www.youtube.com/watch?v=orzNU1R4wb8"}
              steampage={
                "https://store.steampowered.com/app/996580/Spyro_Reignited_Trilogy/"
              }
            />
            <Gamecard
              name={"SYNTHETIK: Legion Rising"}
              image={
                "https://steamcdn-a.akamaihd.net/steam/apps/528230/header.jpg"
              }
              description={
                "SYNTHETIK is an unforgiving shooter rogue-lite in a world overrun by machines. Battle from floor to floor, defeat relentless robotic forces, experience the next level in gun-play and shape your own experience by experimenting with powerful items and modifiers. Can you defeat the Heart of Armageddon?"
              }
              video={"https://www.youtube.com/watch?v=v5-EYFkf-KU"}
              steampage={
                "https://store.steampowered.com/app/528230/SYNTHETIK_Legion_Rising/"
              }
            />
            <Gamecard
              name={"BATTLETECH + Expansions"}
              image={
                "https://gpstatic.com/acache/34/94/1/uk/packshot-03ec3dcde3c8da7f5bdcf819e88adeb9.jpg"
              }
              description={
                "Take command of your own mercenary outfit of 'Mechs and the MechWarriors that pilot them, struggling to stay afloat as you find yourself drawn into a brutal interstellar civil war."
              }
              video={"https://www.youtube.com/watch?v=tsIMfOo_VO0"}
              steampage={
                "https://store.steampowered.com/app/637090/BATTLETECH/"
              }
            />
            <Gamecard
              name={"Override: Mech City Brawl"}
              image={
                "https://steamcdn-a.akamaihd.net/steam/apps/709440/capsule_616x353.jpg"
              }
              description={
                "No gears, no glory! Control gigantic robots and duke it out in this 3D mech brawler! Epic battles await in local and online Versus mode, 4-player Co-op – where each player controls one part of a mech – and a single-player game mode. Each mech has its own gameplay style, special moves, and finishers."
              }
              video={"https://www.youtube.com/watch?v=XfNKznj6iYI"}
              steampage={
                "https://store.steampowered.com/app/709440/Override_Mech_City_Brawl/"
              }
            />
            <Gamecard
              name={"Yakuza Kiwami"}
              image={
                "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Yakuza_Kiwami_cover.jpg/220px-Yakuza_Kiwami_cover.jpg"
              }
              description={
                "SEGA’s critically-acclaimed entry that started a legend. Become Kazuma Kiryu, an up-and-coming yakuza who takes the fall for the murder of a crime boss, only to emerge from prison ten years later to a changed world. Remastered from the ground up, now in 4K and uncapped framerates on PC."
              }
              video={"https://www.youtube.com/watch?v=BBGgdnN-CjM"}
              steampage={
                "https://store.steampowered.com/app/834530/Yakuza_Kiwami/"
              }
            />
          </div>
          <div className="game-row">
            <Gamecard
              name={"Sword Legacy: Omen"}
              image={"https://i.ytimg.com/vi/CRO2FGmr3N4/maxresdefault.jpg"}
              description={
                "Embark on a brutal re-imagining of the King Arthur mythos as Uther, a vengeful knight aided by Merlin, an eldritch sorcerer, in search of the long-lost Excalibur. Survive intense turn-based combat in this tactical RPG as you travel Broken Britannia, a land devastated by intrigue and deceit."
              }
              video={"https://www.youtube.com/watch?v=jUAKvfDi_yc"}
              steampage={
                "https://store.steampowered.com/app/690140/Sword_Legacy_Omen/"
              }
            />
            <Gamecard
              name={"Soulcalibur VI"}
              image={
                "https://s2.gaming-cdn.com/images/products/3157/271x377/soulcalibur-vi-cover.jpg"
              }
              description={
                "Bring more than your fists to the fight! Featuring all-new battle mechanics and characters, SOULCALIBUR VI marks a new era of the historic franchise. Welcome back to the stage of history!"
              }
              video={"https://www.youtube.com/watch?v=m1sdAmSq4vs"}
              steampage={
                "https://store.steampowered.com/app/544750/SOULCALIBUR_VI/"
              }
            />
            <Gamecard
              name={"Regular Human Basketball"}
              image={
                "https://img.itch.zone/aW1nLzEzNzU4MTUuZ2lm/original/uZwZkd.gif"
              }
              description={
                "Ready to play some ball? Grab a team, suit up, and climb inside your human! Prep its thrusters, lower the all-terrain wheels, and spin up that flailing magnet-arm. It's time to play Regular Human Basketball!"
              }
              video={"https://www.youtube.com/watch?v=ZPB_me25O94"}
              steampage={
                "https://store.steampowered.com/app/661940/Regular_Human_Basketball/"
              }
            />
            <Gamecard
              name={"My Time at Portia"}
              image={
                "https://s2.gaming-cdn.com/images/products/2383/271x377/my-time-at-portia-cover.jpg"
              }
              description={
                "Start a new life in the enchanting town of Portia! Restore your Pa's neglected workshop to its former glory by fulfilling commissions, growing crops, raising animals, and befriending the quirky inhabitants of this charming post-apocalyptic land!"
              }
              video={"https://www.youtube.com/watch?v=XrWc99nyTlo"}
              steampage={
                "https://store.steampowered.com/app/666140/My_Time_At_Portia/"
              }
            />
            <Gamecard
              name={"Fluffy Horde"}
              image={
                "https://steamcdn-a.akamaihd.net/steam/apps/777880/header.jpg?t=1541611931"
              }
              description={
                "Fluffy Horde is a 2D side-scrolling hybrid between real-time strategy and tower defense. The game revolves around a magical hyper-breeding bunny horde created by a misunderstood Shaman wanderer!"
              }
              video={"https://www.youtube.com/watch?v=vwfmxckfnJs"}
              steampage={
                "https://store.steampowered.com/app/777880/Fluffy_Horde/"
              }
            />
          </div>
          <div className="game-row">
            <Gamecard
              name={"Chasm"}
              image={
                "https://steamcdn-a.akamaihd.net/steam/apps/312200/capsule_467x181.jpg"
              }
              description={
                "Explore the depths below a remote mountain town in this procedurally-generated Adventure Platformer. Taking inspiration from hack 'n slash dungeon crawlers and Metroidvania-style platformers, Chasm will immerse you in a fantasy world full of exciting treasure, deadly enemies, and abundant secrets."
              }
              video={"https://www.youtube.com/watch?v=zUqIIQJkoyA"}
              steampage={"https://store.steampowered.com/app/312200/Chasm/"}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Giveaway;
