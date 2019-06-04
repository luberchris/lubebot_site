require("dotenv");
const mongoose = require("mongoose"),
  express = require("express"),
  bodyParser = require("body-parser"),
  logger = require("morgan"),
  Data = require("./models"),
  cors = require("cors"),
  path = require("path");

const API_PORT = process.env.PORT || 3001,
  app = express(),
  router = express.Router();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(logger("dev"))
  .use(cors());

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, "../build")));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

// this is our MongoDB database
const dbRoute =
  process.env.DB_ROUTE ||
  "mongodb://luberchris:1nn0vat0R@ds157946.mlab.com:57946/heroku_fh59b6lx";

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });
mongoose.set("useFindAndModify", false);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database")).on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

router.get("/", (req, res) => {
  res.send("Okay");
});

// this is our get method
// this method fetches all available data in our database
router.get("/getCounts", (req, res) => {
  Data.Count.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getUsers", (req, res) => {
  Data.User.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getEncounters", (req, res) => {
  Data.Encounter.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findOneAndUpdate({ id: id }, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// this is our delete method
// this method removes existing data in our database
// router.delete("/deleteData", (req, res) => {
//   const { id } = req.body;
//   Data.findOneAndDelete({ id: id }, err => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// this is our create methid
// this method adds new data in our database
// router.post("/putData", (req, res) => {
//   let data = new Data();

//   const { id, message } = req.body;

//   if ((!id && id !== 0) || !message) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.message = message;
//   data.id = id;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// append /api for our http requests
app
  .use("/api", router)
  .listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
