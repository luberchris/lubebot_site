const tmi = require("tmi.js");
require("dotenv").config();

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
  client.action("Lubesy", " HeyGuys I'm connected!");
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
  console.log("Server has switched: " + channel);
});

//////////////////Chat Actions////////////////////

//Action
//Anongiftpaidupgrade
//Ban
//Chat
client.on("chat", (channel, user, message, self) => {
  client.action("Lubesy", "test");
});
//Cheer
//Clearchat
//Emoteonly
//Emotesets
//Followersonly
//Giftpaidupgrade
//Hosted
//Hosting
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
//Raw_message
//Resub
//Roomstate
//Slowmode
//Subgift
//Submysterygift
//Subscribers
//Subscription
//Timeout
//Unhost
//Unmod
//VIPs
//Whisper
