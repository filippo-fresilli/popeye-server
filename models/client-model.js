const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/
    },
    name: {
      type: String,
      required: true,
      minlength: 2
    },
    surname: String,
    encryptedPassword: {
      type: String,
      required: true
    },
    phoneNumber: Number
  },
  {
    timestamps: true
  }
);
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
