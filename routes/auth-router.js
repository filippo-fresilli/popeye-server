const express    = require("express");
const bcrypt     = require("bcrypt");
const passport   = require("passport");

const Client     = require("../models/client-model.js");
const TatooMaker = require("../models/tatoo-maker-model.js")
const { sendSignupMail } = require("../config/nodemailer-setup.js");

const router = express.Router();


//------ Signup client -------------------------------------------------------------
router.post("/signup", (req, res, next) => {
  const { email, name, surname, originalPassword, phoneNumber } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    // show error JSON if password is empty or doesn't have a number
    next(new Error("Incorrect password."));
    return; // use "return" instead of a big else
  }

  // encrypt the submitted password before saving
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  // the Client.create results in userDoc 
  Client.create({ email, name, surname, encryptedPassword, phoneNumber })
    .then(userDoc => {
      // function to send email
      sendSignupMail(userDoc.name, userDoc.email)
        .then(() => {
          req.logIn(userDoc, () => {
            // hide "encryptedPassword" before sending the JSON (it's a security risk)
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err))
});

//------ Signup client with Google --------------------

router.post("/google/google-signup", (req, res, next) => {
  const { email, name, surname } = req.body;


  // the Client.create results in userDoc 
  Client.create({ email, name, surname })
    .then(userDoc => {
      // function to send email
      sendSignupMail(userDoc.name, userDoc.email)
        .then(() => {
          req.logIn(userDoc, () => {
            // hide "encryptedPassword" before sending the JSON (it's a security risk)
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err))
});


//------ Signup tattoist -------------------------------------------------------------
router.post("/tattoist-signup", (req, res, next) => {
  const { email, fullName, city, originalPassword, phoneNumber } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    // show error JSON if password is empty or doesn't have a number
    next(new Error("Incorrect password."));
    return; // use "return" instead of a big else
  }

  // encrypt the submitted password before saving
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  // the Client.create results in userDoc 
  TatooMaker.create({ email, fullName, city, encryptedPassword, phoneNumber })
    .then(userDoc => {
      // function to send email
      sendSignupMail(userDoc.fullName, userDoc.email)
        .then(() => {
          req.logIn(userDoc, () => {
            // hide "encryptedPassword" before sending the JSON (it's a security risk)
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err))
});

//------ Login client -------------------------------------------------------------
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
      console.log(originalPassword, encryptedPassword);
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

//------ Login Tattoist -------------------------------------------------------------
router.post("/tattoist-login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  // search the database for a user with that email
  TatooMaker.findOne({ email: { $eq: email } })
    .then(userDoc => {
      console.log(userDoc);
      // "userDoc" will be empty if the email is wrong
      if (!userDoc) {
        // "req.flash()" is defined by the "connect-flash" npm package
        // (2 arguments: message type and message text)
        next(new Error("Incorrect email. 🤦‍♂️"));
        return; // use "return" instead of a big else
      }

      // check the password
      const { encryptedPassword } = userDoc;
      console.log(originalPassword, encryptedPassword);
      // "compareSync()" will return FALSE if "originalPassword" is WRONG
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        // "req.flash()" is defined by "connect-flash"
        // (2 arguments: message type and message text)
        next(new Error("Incorrect password. 🤯"));
      } else {
        // "req.logIn()" is a Passport method that calls "serializeUser()"
        // (that saves the USER ID in the session)
        req.logIn(userDoc, () => {
          console.log("333333", userDoc)
          // hide "encryptedPassword"
          userDoc.encryptedPassword = undefined;
          res.json({ userDoc });
        });
      }
    })
    .catch(err => next(err));
});


router.delete("/tattoist-logout", (req, res, next) => {
  // "req.logOut()" is a Passport method that removes the user ID from session
  req.logOut();

  // send empty "userDoc" when you log out
  res.json({ userDoc: null });
});

// allows the client to check to see:
// (a) if we are logged-in
// (b) what are the details of the logged-in user
router.get("/checkTattoist", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

module.exports = router;
