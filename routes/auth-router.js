const express = require("express");
const bcrypt = require("bcrypt");

const Client = require("../models/client-model.js");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { email, name, surname, originalPassword, phoneNumber } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    // show error JSON if password is empty or doesn't have a number
    next(new Error("Incorrect password."));
    return; // use "return" instead of a big else
  }

  // encrypt the submitted password before saving
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Client.create({ email, name, surname, encryptedPassword, phoneNumber })
    .then(userDoc => {
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => next(err));
});


router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  // search the database for a user with that email
  Client.findOne({ email: { $eq: email } })
    .then(userDoc => {
      // "userDoc" will be empty if the email is wrong
      if (!userDoc) {
        // "req.flash()" is defined by the "connect-flash" npm package
        // (2 arguments: message type and message text)
        next(new Error("Incorrect email. 🤦‍♂️"));
        return; // use "return" instead of a big else
      }

      // check the password
      const { encryptedPassword } = userDoc;
      // "compareSync()" will return FALSE if "originalPassword" is WRONG
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        // "req.flash()" is defined by "connect-flash"
        // (2 arguments: message type and message text)
        next(new Error("Incorrect password. 🤯"));
      } else {
        // "req.logIn()" is a Passport method that calls "serializeUser()"
        // (that saves the USER ID in the session)
        req.logIn(userDoc, () => {
          // hide "encryptedPassword"
          userDoc.encryptedPassword = undefined;
          res.json({ userDoc });
        });
      }
    })
    .catch(err => next(err));
});


router.delete("/logout", (req, res, next) => {
  // "req.logOut()" is a Passport method that removes the user ID from session
  req.logOut();

  // send empty "userDoc" when you log out
  res.json({ userDoc: null });
});

// allows the client to check to see:
// (a) if we are logged-in
// (b) what are the details of the logged-in user
router.get("/checkuser", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

module.exports = router;
