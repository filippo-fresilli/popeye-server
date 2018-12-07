require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

require("./config/passport-setup.js");

mongoose
  .connect(
    "mongodb://localhost/popeye-server",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Allow Cross-origin Resource sharing(CORS)
//(allow access to the API from th frontend JS on a different domain/origin)
app.use(
  cors({
    credentials: true,
    //the array of domains/origins we want cookies from (just the React app)
    origin: ["http://localhost:3000"]
  })
);
app.use(
  session({
    secret: "y$TmzX8e7K409/j](jdNhyjqOxQ2wnq*#Lznn9B|Vr",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

//connection to the auth-router.js file , if I need more routes I can do like that
const authRouter = require("./routes/auth-router.js");
app.use("/api", authRouter);

const tatooRouther = require("./routes/tatoo-router.js");
app.use("/api", tatooRouther);

module.exports = app;
