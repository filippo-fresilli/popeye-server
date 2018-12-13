// managing client info with passport

const passport = require("passport");

const Client = require("../models/client-model.js");
const Tattooist = require("../models/tatoo-maker-model.js");


// serializeUser(): defines what data to save in the session
// (happens when you log in successfully)
passport.serializeUser((userDoc, done) => {
  console.log("SERIALIZE (save user ID to session) 🐋", userDoc._id);

  // call done() with null and the result if it's successful
  // (the result is the user's ID that we want to save in the session)
  done(null, {
    _id: userDoc._id,
    isTattooist: Boolean(userDoc.geometry)
  });
});

// deserializeUser(): defines how to retrieve the user information from the DB
// (happens automatically on EVERY request AFTER you log in)
passport.deserializeUser((userInfo, done) => {
  console.log("DESERIALIZE (retrieving user info from the DB) 🐓");

  if (userInfo.isTattooist) {
    Tattooist.findById(userInfo._id)
      .then(userDoc => {
        // call done() with null and the result if it's successful
        // (the result is the user document from the database)
        done(null, userDoc);
      })
      // call done() with the error object if it fails
      .catch(err => done(err));
  }
  else {
    Client.findById(userInfo._id)
      .then(userDoc => {
        // call done() with null and the result if it's successful
        // (the result is the user document from the database)
        done(null, userDoc);
      })
      // call done() with the error object if it fails
      .catch(err => done(err));
  }
});
