const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  id: Number,
  title: String,
  message: String
});

module.exports = mongoose.model("Info", InfoSchema);
