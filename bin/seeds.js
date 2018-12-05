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
      `Connected to Mongo! Database name: "${x.connections[0].FullName}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const tattoistData = [
  {
    picture: "/images/profile-pictures/1.jpg",
    fullName: "Jean-Michel Apeuprès",
    adress: "40 rue du Colisée",
    description:"I am an incredible tattoist. I trainded alot on Filippo's back and draw all the plan of his jail and guess what!? he escaped! " ,
    portfolio: [
      "/images/tattoist-portfolio-images/1.jpg",
      "/images/tattoist-portfolio-images/2.jpg",
      "/images/tattoist-portfolio-images/3.jpeg", 
      "/images/tattoist-portfolio-images/4.jpg", 
      "/images/tattoist-portfolio-images/5.png",  
  ]
  },

  {
    picture: "//images/profile-pictures/2.jpg",
    fullName: "Roger Rabbit",
    adress: "100 avenue Victor Hugo",
    description:"Specialized in colorful, geometric pieces that she's expanded into temporary tattoos, pins and other merch. " ,
    portfolio: [
      "/images/tattoist-portfolio-images/6.jpg",
      "/images/tattoist-portfolio-images/7.jpg",
      "/images/tattoist-portfolio-images/8.jpg", 
      "/images/tattoist-portfolio-images/9.jpg", 
      "/images/tattoist-portfolio-images/10.png",  
  ]
  },

  {
    picture: "/images/profile-pictures/3.png",
    fullName: "Francis Lenorman",
    adress: "17 rue Lafayette",
    description:"My beautiful graphic, all-black pieces evoke the mystery and seduction of film noir " ,
    portfolio: [
      "/images/tattoist-portfolio-images/11.jpg",
      "/images/tattoist-portfolio-images/12.png",
      "/images/tattoist-portfolio-images/13.jpg", 
      "/images/tattoist-portfolio-images/14.jpg", 
      "/images/tattoist-portfolio-images/15.jpg",  
  ]
  },

  {
    picture: "/images/profile-pictures/4.jpeg",
    fullName: "Jean-Patrick Blah",
    adress: "14 rue du Parc Royal ",
    description:"My signature watercolor-inspired pieces look like they belong in a museum. " ,
    portfolio: [
      "/images/tattoist-portfolio-images/16.jpg",
      "/images/tattoist-portfolio-images/17.png",
      "/images/tattoist-portfolio-images/18.png", 
      "/images/tattoist-portfolio-images/19.jpg", 
      "/images/tattoist-portfolio-images/20.jpg",  
  ]
  },


  {
    picture: "/images/profile-pictures/5.jpg",
    fullName: "Pascal Ladale",
    adress: "12 rue de Tolbiac",
    description:"Paris-based and have  inked the likes of Robert Downey Jr. and Courtney Love. " ,
    portfolio: [
      "/images/tattoist-portfolio-images/21.jpg",
      "/images/tattoist-portfolio-images/22.jpg",
      "/images/tattoist-portfolio-images/23.jpeg", 
      "/images/tattoist-portfolio-images/24.jpg", 
      "/images/tattoist-portfolio-images/25.png",  
  ]
  },

  {
    picture: "/images/profile-pictures/6.jpg",
    fullName: "Eleonor Marolex",
    adress: "20 avenue Niel",
    description:" I have amassed a massive following thanks to my girly tattoos of colorful cartoon characters and vibrant floral arrangements. " ,
    portfolio: [
      "/images/tattoist-portfolio-images/26.jpg",
      "/images/tattoist-portfolio-images/27.jpg",
      "/images/tattoist-portfolio-images/28.jpg", 
      "/images/tattoist-portfolio-images/29.jpg", 
      "/images/tattoist-portfolio-images/30.jpeg",  
  ]
  },

  {
    picture: "/images/profile-pictures/7.jpg",
    fullName: "Justine Titegoutte",
    adress: "8 rue de Didot",
    description:"I'm one of the most in-demand tattoo artists in Paris. He's inked the likes of Drake (famously, a prayer hand emoji) and Rihanna. According to the New York Times, his signature is a grouping of circles, arrows and dots, which fans have dubbed 'Woo arrows.' " ,
    portfolio: [
      "/images/tattoist-portfolio-images/31.jpg",
      "/images/tattoist-portfolio-images/32.jpeg",
      "/images/tattoist-portfolio-images/33.jpeg", 
      "/images/tattoist-portfolio-images/34.jpg", 
      "/images/tattoist-portfolio-images/35.jpg",  
  ]
  },

  {
    picture: "/images/profile-pictures/8.jpg",
    fullName: "René Lataupe",
    adress: "2 rue de Pommard",
    description:"I am an incredible tattoist. I trained alot on Filippo's back and draw all the plan of it's jail and guess what!? he escaped! " ,
    portfolio: [
      "/images/tattoist-portfolio-images/36.jpg",
      "/images/tattoist-portfolio-images/37.jpg",
      "/images/tattoist-portfolio-images/38.jpg", 
      "/images/tattoist-portfolio-images/39.jpg", 
      "/images/tattoist-portfolio-images/40.jpg",  
  ]
  },
]


tattoist.create(tattoistData)
  .then(response => {
    console.log("It works");
  })
  .catch(err => next(err));