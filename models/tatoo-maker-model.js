const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//GelolocationSchema

const GeoSchema = new Schema({
  type: { type: String, default: "Point" },
  coordinates: {
    type: [Number],
    index:"2dsphere"
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
    geometry: GeoSchema
    
  },
  {
    timestamps: true
  }
);
const TatooMaker = mongoose.model("TatooMaker", tatooMakerSchema);
module.exports = TatooMaker;
