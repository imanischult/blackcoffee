const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/BlackCoffee"
);
const bCoffee = [
  {
    Name: "Urban Grind",
    Address: "962 Marietta St NW, Atlanta, GA 30318",
    Description:
      "Very cozy atmosphere with comfy seats and cute cartoon wall decorations. Also an fun place to have gatherings on Tuesdays, Wednesdays, and Thursday. Prices are good and the service is quick and efficient.",
    CoffeeBrands: "", 
    CoffeeBeans: ""    
  },
];
db.BlackCoffee
  .remove({})
  .then(() => db.BlackCoffee.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });