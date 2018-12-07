const express = require("express");
const TatooMaker = require("../models/tatoo-maker-model");
const router = express.Router();

router.get("/tattoistList", (req, res, next) => {
  const { city } = req.body
  TatooMaker.find({city : {$eq: city}})
    .then(tatooMakerResults => res.json(tatooMakerResults))
    .catch(err => next(err));
});
module.exports = router;
