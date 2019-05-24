require("dotenv");
const _ = require("lodash"),
  controller = require("./controllers/twitchController"),
  Db = require("mongodb").Db,
  MongoClient = require("mongodb").MongoClient,
  Server = require("mongodb").Server,
  ReplSetServers = require("mongodb").ReplSetServers,
  Binary = require("mongodb").Binary,
  GridStore = require("mongodb").GridStore,
  Grid = require("mongodb").Grid,
  Code = require("mongodb").Code,
  BSON = require("mongodb").BSON,
  assert = require("assert"),
  mongoose = require("mongoose"),
  db = require("./models"),
  queries = require("./controllers/queryController"),
  monsters = require("./assets/lists/monsters");

//Connect to database
mongoose.connect(process.env.DB_ROUTE, { useNewUrlParser: true });

// Import channel client
const client = controller.client;

// Keep track of votes
let yesCount = 0;
let noCount = 0;
client.on("chat", (channel, user, message, self) => {
  switch (message) {
    case "#yes":
      yesCount += 1;
      break;
    case "#no":
      noCount += 1;
      break;
    default:
  }
});

module.exports = {
  convertSeconds: function(seconds) {
    let minutes = seconds / 60;
    let remainder = seconds % 60;
    return minutes + " minutes and " + remainder + " seconds";
  },

  findMonster: function(cr, username, channel) {
    for (let i = 0; i < monsters.length; i++) {
      if (monsters[i].CR === cr) {
        let scary =
          monsters[i].monsters[this.getRandomInt(monsters[i].monsters.length)];
        queries.postEncounter(username, scary);
        client.say(channel, username + ", you're now fighting a " + scary.name);
      }
    }
  },

  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  getVotes: function(channel) {
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
        client.say(channel, yesCount + " yes :" + noCount + " no");
        if (yesCount > noCount || yesCount === noCount) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 30000);
    });
    return promise;
  },

  //Props to unicorn_dev for the code and the tutoring - I'm drunk
  gridPrint: function(strang, channel, user) {
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

    console.log(emoteArray.join(" "));

    _.each(_.times(Number(height)), line => {
      client.say(this.removeHash(channel), emoteArray.join(" "));
    });
  },

  /////// WORK ON THIS
  isAdmin: function(mods, channel, user) {
    return (
      mods.includes(user) ||
      user.toLowerCase() === this.removeHash(channel).toLowerCase()
    );
  },

  mock: function(message) {
    let newString = "";
    for (let i = 0; i < message.length; i++) {
      if (i % 2 === 0) {
        newString += message[i].toLowerCase();
      } else {
        newString += message[i].toUpperCase();
      }
    }
    return newString;
  },

  removeHash: function(user) {
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
  },

  rollDice: function(roll) {
    //5d20+10
    //[5, 20+10]
    let number = roll.split("d")[0];
    let die = roll.split("d")[1].split(/[+-*/]+/)[0];
    let modifier = roll.split("d")[1].split(/[+-*/]+/)[1] || 0;
    let total = 0;
    for (let i = 0; i < number; i++) {
      total += this.getRandomInt(die);
    }
    return total + modifier;
  },

  setStat: () => {
    return this.statBonus(this.rollDice("3d6"));
  },

  statBonus: stat => {
    //cwchong is a goddddddddddddddd
    return Math.floor((stat - 10) / 2);

    // switch (stat) {
    //   case 1:
    //     return -5;
    //     break;
    //   case 2 || 3:
    //     return -4;
    //     break;
    //   case 4 || 5:
    //     return -3;
    //     break;
    //   case 6 || 7:
    //     return -2;
    //     break;
    //   case 8 || 9:
    //     return -1;
    //     break;
    //   case 10 || 11:
    //     return 0;
    //     break;
    //   case 12 || 13:
    //     return 1;
    //     break;
    //   case 14 || 15:
    //     return 2;
    //     break;
    //   case 16 || 17:
    //     return 3;
    //     break;
    //   case 18 || 19:
    //     return 4;
    //     break;
    //   case 20 || 21:
    //     return 5;
    //   case 22 || 23:
    //     return 6;
    //     break;
    //   case 24 || 25:
    //     return 7;
    //     break;
    //   case 26 || 27:
    //     return 8;
    //     break;
    //   case 28 || 29:
    //     return 9;
    //     break;
    //   case 30:
    //     return 10;
    //     break;
    // }
  },

  search: (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return myArray[i];
      }
    }
  }
};
