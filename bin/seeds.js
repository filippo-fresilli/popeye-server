require("dotenv").config();

const mongoose = require("mongoose");
const tattoist = require("../models/tatoo-maker.js");

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].tattoistFullName}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const tattoistData = [
  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Jean-Michel Apeuprès",
    adress: "40 rue du Colisée",
    description:"I am an incredible tattoist. I trainded alot on Filippo's back and draw all the plan of it's jail and guess what!? he escaped! " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Roger Rabbit",
    adress: "100 avenue Victor Hugo",
    description:"Specialized in colorful, geometric pieces that she's expanded into temporary tattoos, pins and other merch. " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Francis Lenorman",
    adress: "17 rue Lafayette",
    description:"My beautiful graphic, all-black pieces evoke the mystery and seduction of film noir " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Jean-Patrick Blah",
    adress: "14 rue du Parc Royal ",
    description:"My signature watercolor-inspired pieces look like they belong in a museum. " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },


  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Pascal Ladale",
    adress: "12 rue de Tolbiac",
    description:"Paris-based and have  inked the likes of Robert Downey Jr. and Courtney Love. " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Eleonor Marolex",
    adress: "20 avenue Niel",
    description:" I have amassed a massive following thanks to my girly tattoos of colorful cartoon characters and vibrant floral arrangements. " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "Justine Titegoutte",
    adress: "8 rue de Didot",
    description:"I'm one of the most in-demand tattoo artists in Paris. He's inked the likes of Drake (famously, a prayer hand emoji) and Rihanna. According to the New York Times, his signature is a grouping of circles, arrows and dots, which fans have dubbed 'Woo arrows.' " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },

  {
    picture: "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
    fullName: "René Lataupe",
    adress: "2 rue de Pommard",
    description:"I am an incredible tattoist. I trainded alot on Filippo's back and draw all the plan of it's jail and guess what!? he escaped! " ,
    portfolio: [
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG", 
      "/images/tattoist-images/profile-pictures/1/IMG_4056.JPG",  
  ]
  },
]