//Dependencies
require("dotenv");

const bodyParser = require("body-parser"),
  path = require("path"),
  express = require("express");

//external functions
const helpers = require("./helpers");
const controller = require("./controllers/twitchController");

//all envs
let app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//////////////////Global Variables////////////////////
const client = controller.client;

// const drink = new Audio("./assets/sounds/ice_cubes.mp3");

//////////////////Chat Actions////////////////////

//Action
//Anongiftpaidupgrade

//Ban
client.on("ban", (channel, username, reason) => {
  client.say(
    helpers.removeHash(channel),
    "LUL LUL LUL " +
      helpers.removeHash(username) +
      " was banned from " +
      helpers.removeHash(channel) +
      "'s chat for " +
      reason
  );
  client.whisper(
    user.username,
    "You were banned from " + helpers.removeHash(channel) + " for " + reason
  );
});

//Chat
client.on("chat", (channel, user, message, self) => {
  switch (message.split(" ").length) {
    case 1:
      switch (message) {
        case "!chats":
          break;
        case "!dammitgary":
          client.say(helpers.removeHash(channel), "G-d fucking dammit");
          break;
        case "!deaths":
          break;
        case "!drink":
          client.say(
            helpers.removeHash(channel),
            helpers.removeHash(channel) + " you better DRINK"
          );
          break;
        //revise
        case "!gaytest":
          client.say(
            helpers.removeHash(channel),
            "GayPride " +
              user.username +
              " is " +
              helpers.getRandomInt(100) +
              "% gay GayPride"
          );
          break;
        case "!lubes":
          break;
        case "!lurk":
          client.say(
            helpers.removeHash(channel),
            user.username +
              ", thank you for the lurk! Remember to mute the tab and not the stream"
          );
          break;
        case "!mods":
          client.mods(helpers.removeHash(channel)).then(mods => {
            client.say(helpers.removeHash(channel), "Mods: " + mods);
          });
          break;
        case "!shot":
          helpers.getVotes(helpers.removeHash(channel)).then(done => {
            client.say(
              helpers.removeHash(channel),
              done
                ? "Take a shot, honey"
                : "You don't need to take a shot right now, honey"
            );
          });
          break;
        case "!stairs":
          //Add soundbyte of Eddy
          client.say(
            helpers.removeHash(channel),
            "NotLikeThis NotLikeThis NotLikeThis WHAT HAPPENED TO THE STAIRS?? NotLikeThis NotLikeThis NotLikeThis "
          );
          break;
        case "!twitter":
          client.say(
            helpers.removeHash(channel),
            "Here's Chris's Twitter: https://twitter.com/luberchris"
          );
          break;
        case "!users":
          break;
        case "!website":
          client.say(
            helpers.removeHash(channel),
            "Here's Chris's website: http://chrisluber.com"
          );
          break;
        case "#death":
          break;
        case "#lube":
          break;
        default:
          break;
      }

    default:
      switch (message.substr(0, message.indexOf(" "))) {
        //Chat commands
        case "!mock":
          client.say(
            helpers.removeHash(channel),
            helpers.mock(message.substr(message.indexOf(" ") + 1))
          );
          break;
        case "!grid":
          helpers.gridPrint(message, channel, user);
          break;
      }
  }
});

//Cheer

//Clearchat
client.on("clearchat", channel => {
  client.say(
    helpers.removeHash(channel),
    helpers.removeHash(channel) + "'s chat was cleared!"
  );
});

//Emoteonly
//Emotesets
//Followersonly
//Giftpaidupgrade

//Hosted
client.on("hosted", (channel, username, viewers, autohost) => {
  if (!autohost) {
    client.say(
      helpers.removeHash(channel),
      helpers.removeHash(username) +
        " is hosting us for " +
        viewers +
        " people!"
    );
    for (let i = 0; i < 10; i++) {
      client.say(
        helpers.removeHash(channel),
        helpers.removeHash(username) +
          " is hosting us for " +
          viewers +
          " people!\nGayPride GayPride GayPride GayPride GRAB THE LUBE BOYS GayPride GayPride GayPride GayPride "
      );
    }
  } else {
    console.log(
      helpers.removeHash(username) +
        " is autohosting us for " +
        viewers +
        " people!"
    );
  }
});

//Hosting
client.on("hosting", (channel, target, viewers) => {
  client.say(
    helpers.removeHash(channel),
    viewers + " of us are hosting " + helpers.removeHash(target) + "!"
  );
});

//Join
//Logon
//Message
//Messagedeleted
//Mod
//Mods
//Notice
//Part
//Ping
//Pong
//R9kbeta

//Raided
client.on("raided", (channel, username, viewers) => {
  for (let i = 0; i < 10; i++) {
    client.say(
      helpers.removeHash(channel),
      viewers +
        " NotLikeThis HeyGuys Oh golly here they come " +
        viewers +
        " VoteYea VoteYea VoteYea VoteYea"
    );
  }
  client.say(
    helpers.removeHash(channel),
    `My butt is ready GayPride GayPride GayPride GayPride GayPride GayPride GayPride GayPride\n
    We're being raided by ` +
      helpers.removeHash(username) +
      `and their ` +
      viewers +
      ` raiders!`
  );
});

//Raw_message
//Resub
//Roomstate
//Slowmode
//Subgift
//Submysterygift
//Subscribers
//Subscription

//Timeout
client.on("timeout", (channel, username, length, reason) => {
  client.say(
    helpers.removeHash(channel),
    helpers.removeHash(username) +
      " was shushed for " +
      helpers.convertSeconds(length)
  );
  client.whisper(
    helpers.removeHash(username),
    "You were timed out from " +
      helpers.removeHash(channel) +
      "'s chat for " +
      helpers.convertSeconds(length) +
      " for " +
      reason
  );
});

//Unhost
//Unmod
//VIPs
//Whisper
