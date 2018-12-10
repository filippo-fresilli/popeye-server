const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//GelolocationSchema

const GeoSchema = new Schema({
  type: { type: String, default: "Point" },
  coordinates: {
    type: [Number]
  }
});

const tatooMakerSchema = new Schema(
  {
    picture: String,
    fullName: {
      type: String,
      required: true,
      minlength: 2
    },
    adress: {
      type: String
    },
    // coordinate: [Number],
    city: { type: String },
    appointement: {
      type: Schema.Types.ObjectId,
      ref: "Appointment"
    },
    description: String,
    portfolio: [String],
    geometry: {
      type: GeoSchema,
      index: "2dsphere"
    }
  },
  {
    timestamps: true
  }
);

const TatooMaker = mongoose.model("TatooMaker", tatooMakerSchema);
module.exports = TatooMaker;
