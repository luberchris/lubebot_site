const db = require("../models");

module.exports = {
  getCount: (req, client, channel) => {
    db.Count.findOne({
      name: req
    })
      .then(dbModel => {
        client.say(
          channel,
          req.charAt(0).toUpperCase() + req.slice(1) + ": " + dbModel.total
        );
      })
      .catch(err => {
        console.log(err);
      });
  },

  getQuote: () => {},

  userStats: (client, channel, username) => {
    db.User.findOne({
      name: username.toLowerCase()
    })
      .then(res => {
        client.say(channel, username + ": Lvl " + res.level);
        client.say(channel, "Xp: " + res.xp);
        client.say(channel, "Chats: " + res.chats);
        client.say(channel, "Lubes: " + res.lubes);
      })
      .catch(err => {
        console.log("Error finding user: " + err);
      });
  },

  postQuote: () => {},

  postUser: req => {
    if (db.User.find({ name: req.username }) === 0) {
      let user = new db.User({ name: req.username, sub: req.subscriber });
      user.save(err => {
        if (err) console.log(err);
      });
    }
  },

  putCount: req => {
    db.Count.updateOne({ name: req }, { $inc: { total: 1 } })
      .then()
      .catch(err => {
        console.log(err);
      });
  },

  putUser: (command, username, xp = null) => {
    switch (command) {
      case "chats":
        db.User.updateOne({ name: username }, { $inc: { chats: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "lubes":
        db.User.updateOne({ name: username }, { $inc: { lubes: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "xp":
        db.User.updateOne({ name: username }, { $inc: { xp: xp } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "level":
        db.User.updateOne({ name: username }, { $inc: { level: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "sub":
        db.User.updateOne({ name: username }, { $set: { sub: true } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
    }
  }
};
