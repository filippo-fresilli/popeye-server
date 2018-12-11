const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentSchema = new Schema(
  {
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client", 
      required: true,
    },
    tattoistId: {
      type: Schema.Types.ObjectId,
      ref: "TatooMaker", 
      required: true,
    }
  },
  {
    timestamps: true
  }
);
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;