//Dependencies
require("dotenv");
const Db = require("mongodb").Db,
  MongoClient = require("mongodb").MongoClient,
  Server = require("mongodb").Server,
  ReplSetServers = require("mongodb").ReplSetServers,
  ObjectID = require("mongodb").ObjectID,
  Binary = require("mongodb").Binary,
  GridStore = require("mongodb").GridStore,
  Grid = require("mongodb").Grid,
  Code = require("mongodb").Code,
  BSON = require("mongodb").BSON,
  assert = require("assert"),
  bodyParser = require("body-parser"),
  path = require("path"),
  express = require("express");

//external functions
const helpers = require("./helpers");
const controller = require("./controller");

let app = express();

// //all envs
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");

app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));

//////////////////Global Variables////////////////////
const client = controller.client;

// const drink = new Audio("./assets/sounds/ice_cubes.mp3");

//////////////////Chat Actions////////////////////

//Action
//Anongiftpaidupgrade

//Ban
client.on("ban", (channel, username, reason) => {
  client.action(
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
        case "!dammitgary":
          client.say(helpers.removeHash(channel), "G-d fucking dammit");
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
        case "!lurk":
          client.say(
            helpers.removeHash(channel),
            user.username +
              ", thank you for the lurk! Remember to mute the tab and not the stream"
          );
          break;
        case "!mods":
          client.mods(helpers.removeHash(channel)).then(mods => {
            client.action(helpers.removeHash(channel), "Mods: " + mods);
          });
          break;
        case "!shot":
          helpers.getVotes(helpers.removeHash(channel)).then(done => {
            client.action(
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
        case "!website":
          client.say(
            helpers.removeHash(channel),
            "Here's Chris's website: http://chrisluber.com"
          );
          break;
      }

    default:
      switch (message.substr(0, message.indexOf(" "))) {
        //Chat commands
        case "!mock":
          client.action(
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
  client.action(
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
    client.action(
      helpers.removeHash(channel),
      helpers.removeHash(username) +
        " is hosting us for " +
        viewers +
        " people!"
    );
    for (let i = 0; i < 10; i++) {
      client.action(
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
  client.action(
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
    client.action(
      helpers.removeHash(channel),
      viewers +
        " NotLikeThis HeyGuys Oh golly here they come " +
        viewers +
        " VoteYea VoteYea VoteYea VoteYea"
    );
  }
  client.action(
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
  client.action(
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
