const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tatooMakerSchema = new Schema(
  {
    picture: String,
    fullName: String,
    adress: String,
    description: String,
    portfolio: Array
  },
  {
    timestamps: true
  }
);
const TatooMaker = mongoose.model("TatooMaker", tatooMakerSchema);
module.exports = TatooMaker;
