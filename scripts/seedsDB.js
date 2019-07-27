const mongoose = require("mongoose");
const db = require("../models");

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/BlackCoffee"
// );

const coffeeShop = [
  {
    Name: "Urban Grind",
    Address: "962 Marietta St NW, Atlanta, GA 30318",
    Description:
      "Hip coffeehouse with cafe menu & free WiFi holds film screenings, poetry slams & other arty events.",
    Area: "West Atlanta",
    CoffeeBrand: "Bratdorf Bronson"
  },
  {
    Name: "Buzz",
    Address: "2315 Cascade Rd SW, Atlanta, GA 30311",
    Description:
      "BUZZ will be a premier stop for art, culture, and community. We will feature premium coffee from Stumptown Coffee Roasters as well as Old World and New World Wines in an art filled setting.",
    Area: "South Atlanta",
    CoffeeBrand: "Stumptown Coffee Roasters"
  },
  {
    Name: "Just Add Honey Tea Company",
    Address: "209 Edgewood Ave NE, Atlanta, GA 30303",
    Description:
      "Just Add Honey Tea Co. wants you to enjoy the best, freshest, and most flavorful teas with every sip. Whether it is a black tea, herbal tea, fruit tea or specialty tea, just add honey wants you to enjoy every cup. Anytime. Anywhere.",
    Area: "East Atlanta/Edgewood",
    CoffeeBrand: "Kuntz Coffee"
  }
];

const reviews = [{}];

try {
  mongoose.connect(
    "mongodb://heroku_h05lv8xk:pk9qsmle95olhbmcn2a4vgvov5@ds261072.mlab.com:61072/heroku_h05lv8xk",
    { useNewUrlParser: true }
  );

  db.coffeeShop
    .deleteMany({})
    .then(() => db.coffeeShop.collection.insertMany(coffeeShop))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

  db.reviews
    .deleteMany({})
    .then(() => db.reviews.collection.insertMany(reviews))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
} catch (err) {
  console.log("there was an error connecting", err);
}
