const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  chats: { type: Number, default: 0 },
  lubes: { type: Number, default: 0 },
  sub: { type: Boolean, default: false },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
