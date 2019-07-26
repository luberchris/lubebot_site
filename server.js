require("dotenv").config();
const mongoose = require("mongoose"),
  db = require("./models");

//Connect to database
mongoose.connect(process.env.DB_ROUTE, { useNewUrlParser: true });
