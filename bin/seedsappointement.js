require("dotenv").config();

const mongoose = require("mongoose");
const appointment = require("../models/appointment-model.js");

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

  const appointmentData = [
    {
      startDate: new Date(2017, 11, 14, 11, 0, 0),
      endDate: new Date(2017, 11, 14, 11, 31, 0),
      clientId: "5c0aa7326591296fc03c780f",
      tattoistId:"5c0fed3d9958d00d26d291c6",
    },
    {
      startDate: new Date(2017, 11, 15, 11, 0, 0),
      endDate: new Date(2017, 11, 15, 11, 31, 0),
      clientId: "5c0aa7326591296fc03c780f",
      tattoistId:"5c0fed3d9958d00d26d291c6",
    },
    {
      startDate: new Date(2017, 11, 16, 11, 0, 0),
      endDate: new Date(2017, 11, 16, 11, 31, 0),
      clientId: "5c090c7a98b9ba41a35e535e",
      tattoistId:"5c0fed3d9958d00d26d291c8",
    },
    {
      startDate: new Date(2017, 11, 17, 11, 0, 0),
      endDate: new Date(2017, 11, 17, 11, 31, 0),
      clientId: "5c090c7a98b9ba41a35e535e",
      tattoistId:"5c0fed3d9958d00d26d291c8",
    },

    {
      startDate: new Date(2017, 11, 18, 11, 0, 0),
      endDate: new Date(2017, 11, 18, 14, 31, 0),
      clientId: "5c090c7a98b9ba41a35e535e",
      tattoistId:"5c0fed3d9958d00d26d291c8",
    },
  ];
  
  appointment
    .create(appointmentData)
    .then(response => {
      console.log("For appointement seed It works!");
    })
    .catch(err => console.log(err));
  