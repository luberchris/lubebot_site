const tmi = require("tmi.js");
require("dotenv").config();

//////////////////Global Variables////////////////////

const insults = [
  "lil bitch",
  "whatever dummy",
  "fuggin uh",
  "okay shut up",
  "you waste of space"
];

//////////////////Helpers////////////////////
const convertSeconds = seconds => {
  let minutes = seconds / 60;
  let remainder = seconds % 60;
  return minutes + " minutes and " + remainder + " seconds";
};

const removeHash = user => {
  if (user.charAt(0) === "#") {
    return (
      user
        .substr(1, user.length)
        .charAt(0)
        .toUpperCase() + user.substr(2, user.length)
    );
  } else {
    return user.charAt(0).toUpperCase() + user.slice(1);
  }
};

const mock = message => {
  let newString = "";
  for (let i = 0; i < message.length; i++) {
    if (i % 2 === 0) {
      newString += message[i].toLowerCase();
    } else {
      newString += message[i].toUpperCase();
    }
  }
  return newString;
};

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

//////////////////Twitch Connection Options////////////////////
const options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "lubechatbot",
    password: process.env.TTV_OAUTH
  },
  channels: ["Lubesy"]
};

const client = new tmi.client(options);

//////////////////Connection Actions////////////////////
client.connect();

//Connecting
client.on("connecting", (address, port) => {
  console.log("Attempting to connect to Twitch: " + address + ":" + port);
});

//Connected
client.on("connected", (address, port) => {
  console.log("Connected to Twitch: " + address + ":" + port);
});

//Disconnected
client.on("disconnected", reason => {
  console.log(
    `Disconnected\n
  ----------------\n` + reason
  );
});

//Reconnect
client.on("reconnect", () => {
  console.log("Reconnected to Twitch");
});

//Serverchange
client.on("serverchange", channel => {
  console.log("Server has switched: " + removeHash(channel));
});

//////////////////Chat Actions////////////////////

//Action
//Anongiftpaidupgrade

//Ban
client.on("ban", (channel, username, reason) => {
  client.action(
    removeHash(channel),
    "LUL LUL LUL " +
      removeHash(username) +
      " was banned from " +
      removeHash(channel) +
      "'s chat for " +
      reason
  );
  client.whisper(
    user.username,
    "You were banned from " + removeHash(channel) + " for " + reason
  );
});

//Chat
client.on("chat", (channel, user, message, self) => {
  switch (message.split(" ").length) {
    case 1:
      switch (message) {
        case "!twitter":
          client.action(
            removeHash(channel),
            "Here's Chris's Twitter: https://twitter.com/luberchris"
          );
          break;
        case "!website":
          client.action(
            removeHash(channel),
            "Here's Chris's website: http://chrisluber.com"
          );
          break;
        case "!stairs":
          //Add soundbyte of Eddy
          client.action(
            removeHash(channel),
            "NotLikeThis NotLikeThis NotLikeThis WHAT HAPPENED TO THE STAIRS?? NotLikeThis NotLikeThis NotLikeThis "
          );
          break;
        case "!damnitgary":
          client.action(removeHash(channel), "God fucking dammit");
          break;
      }

    default:
      switch (message.substr(0, message.indexOf(" "))) {
        //Chat commands
        case "!mock":
          client.action(
            removeHash(channel),
            mock(message.substr(message.indexOf(" ") + 1)) +
              ", " +
              insults[getRandomInt(insults.length)]
          );
          break;
      }
  }
});

//Cheer

//Clearchat
client.on("clearchat", channel => {
  client.action(
    removeHash(channel),
    removeHash(channel) + "'s chat was cleared!"
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
      removeHash(channel),
      removeHash(username) + " is hosting us for " + viewers + " people!"
    );
    for (let i = 0; i < 10; i++) {
      client.action(
        removeHash(channel),
        removeHash(username) +
          " is hosting us for " +
          viewers +
          " people!\nGayPride GayPride GayPride GayPride GRAB THE LUBE BOYS GayPride GayPride GayPride GayPride "
      );
    }
  } else {
    console.log(
      removeHash(username) + " is autohosting us for " + viewers + " people!"
    );
  }
});

//Hosting
client.on("hosting", (channel, target, viewers) => {
  client.action(
    removeHash(channel),
    viewers + " of us are hosting " + removeHash(target) + "!"
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
      removeHash(channel),
      viewers +
        " NotLikeThis HeyGuys Oh golly here they come " +
        viewers +
        " VoteYea VoteYea VoteYea VoteYea"
    );
  }
  client.action(
    removeHash(channel),
    `My butt is ready GayPride GayPride GayPride GayPride GayPride GayPride GayPride GayPride\n
    We're being raided by ` +
      removeHash(username) +
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
    removeHash(channel),
    removeHash(username) + " was shushed for " + convertSeconds(length)
  );
  client.whisper(
    removeHash(username),
    "You were timed out from " +
      removeHash(channel) +
      "'s chat for " +
      convertSeconds(length) +
      " for " +
      reason
  );
});

//Unhost
//Unmod
//VIPs
//Whisper
