const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  name: String,
  charity: String,
  about: String,
  setup: String,
  donate: String,
  rules: String,
  social: Object,
  faq: String
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
