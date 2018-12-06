const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tatooMakerSchema = new Schema(
  {
    picture: String,
    fullName: {
      type: String,
      required: true,
      minlength: 2
    },
    adress: { 
      type: String, 
      coordinate: [Number] 
    },
    description: String,
    portfolio: [String]
  },
  {
    timestamps: true
  }
);
const TatooMaker = mongoose.model("TatooMaker", tatooMakerSchema);
module.exports = TatooMaker;
