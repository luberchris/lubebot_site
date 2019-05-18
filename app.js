const tmi = require("tmi.js");
const _ = require("lodash");
require("dotenv").config();

//////////////////Global Variables////////////////////

let yesCount = 0;
let noCount = 0;

// const drink = new Audio("./assets/sounds/ice_cubes.mp3");

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

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getVotes = channel => {
  yesCount = 0;
  noCount = 0;
  client.action(
    channel,
    "30 seconds: #yes to make Luber take a shot, #no otherwise"
  );
  setTimeout(() => {
    client.action(
      channel,
      "15 seconds left!!! #yes to make Luber take a shot!"
    );
  }, 15000);
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (yesCount > noCount || yesCount === noCount) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 30000);
  });
  return promise;
};

//Props to unicorn_dev for the code and the tutoring - I'm drunk
const gridPrint = (strang, channel, user) => {
  const messageParts = strang.split(" ");
  const messageLengthParts = messageParts.length;
  let repeated = messageParts.slice(1, messageLengthParts - 2).join(" ");

  if (messageLengthParts === 2) {
    repeated = messageParts[1];
  }

  let width = messageParts[strang.split(" ").length - 2];
  let height = messageParts[strang.split(" ").length - 1];

  if ((messageLengthParts >= 3 && isNaN(height)) || messageLengthParts < 3) {
    height = 1;
  }

  if ((messageLengthParts >= 4 && isNaN(width)) || messageLengthParts < 4) {
    width = 1;
  }
  
  const emoteArray = [];

  _.each(_.times(Number(width)), line => {
    emoteArray.push(repeated);
  });

  console.log(emoteArray.join(" "))

  _.each(_.times(Number(height)), line => {
    client.say(removeHash(channel), emoteArray.join(" "));
  });
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
        case "!damnitgary":
          client.action(removeHash(channel), "God fucking dammit");
          break;
        case "!drink":
          client.action(
            removeHash(channel),
            removeHash(channel) + " you better DRINK"
          );
          break;
        case "!gaytest":
          client.action(removeHash(channel), "gaytest filler");
        // Figure out how to make sounds play
        // drink.play();
        case "!mods":
          client.mods(removeHash(channel)).then(mods => {
            client.action(removeHash(channel), "Mods: " + mods);
          });
          break;
        case "!shot":
          getVotes(removeHash(channel)).then(done => {
            client.action(
              removeHash(channel),
              done
                ? "Take a shot, honey"
                : "You don't need to take a shot right now, honey"
            );
          });
          break;
        case "!stairs":
          //Add soundbyte of Eddy
          client.action(
            removeHash(channel),
            "NotLikeThis NotLikeThis NotLikeThis WHAT HAPPENED TO THE STAIRS?? NotLikeThis NotLikeThis NotLikeThis "
          );
          break;
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
        case "#yes":
          yesCount += 1;
          break;
        case "#no":
          noCount += 1;
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
        case "!grid":
          gridPrint(message, channel, user);
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
