const express = require("express");
const TatooMaker = require("../models/tatoo-maker-model");
const router = express.Router();

//Get /tattoistList -Retrieve the list of Tattoist
router.get("/tattoistList", (req, res, next) => {
  const { city } = req.body;
  TatooMaker.find({ city: { $eq: city } })
    .then(tatooMakerResults => res.json(tatooMakerResults))
    .catch(err => next(err));
});

// Get /tattoist/:id -Retrieve the details of One Tattoist
router.get("/tattoistList/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  TatooMaker.findById(id)
    .then(tatooMakerResults => {
      console.log(tatooMakerResults);
      res.json(tatooMakerResults);
    })
    .catch(err => next(err));
});

router.post("/tattoistlist", (req, res, next) => {
  // TatooMaker.findById(id)
  //   .then(tatooMakerResults => {
  //     console.log(tatooMakerResults);
  //     res.json(tatooMakerResults);
  //   })
  //   .catch(err => next(err));
  TatooMaker.find({
    geometry: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(req.body.lng), parseFloat(req.body.lat)]
        },
        $maxDistance: 10000 // 10km
      }
    }
  })
    .then(response => res.json(response))
    .catch(err => next(err));
});
module.exports = router;
