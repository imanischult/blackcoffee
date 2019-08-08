const mongoose = require("mongoose");
const faker = require("faker"); // faker is used to insert fake data https://github.com/marak/Faker.js/
const db = require("../models");
const algoliasearch = require("algoliasearch");
require("dotenv").config();

const client = algoliasearch("V63NYRH7LN", "9380ecbed812963b73d661779906c9d2");
const index = client.initIndex("coffeeshops");

async function asyncForEach(array, callback) {
  console.log("looping over", array.length, " items.");
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const coffeeShops = [
  {
    name: "Urban Grind",
    address: "962 Marietta St NW, Atlanta, GA 30318",
    description:
      "Hip coffeehouse with cafe menu & free WiFi holds film screenings, poetry slams & other arty events.",
    area: "West Atlanta",
    coffeeBrand: "Bratdorf Bronson"
  },

  {
    name: "Buzz Coffee and Winehouse",
    address: "2315 Cascade Rd SW, Atlanta, GA 30311",
    description:
      "BUZZ will be a premier stop for art, culture, and community. We will feature premium coffee from Stumptown Coffee Roasters as well as Old World and New World Wines in an art filled setting.",
    area: "South Atlanta",
    coffeeBrand: "Stumptown Coffee Roasters"
  },
  {
    name: "Just Add Honey Tea Company",
    address: "209 Edgewood Ave NE, Atlanta, GA 30303",
    description:
      "Just Add Honey Tea Co. wants you to enjoy the best, freshest, and most flavorful teas with every sip. Whether it is a black tea, herbal tea, fruit tea or specialty tea, just add honey wants you to enjoy every cup. Anytime. Anywhere.",
    area: "East Atlanta/Edgewood",
    coffeeBrand: "Kuntz Coffee"
  },
  {
    name: "Grant Park Coffeehouse",
    address: "753 Cherokee SE, Atlanta, GA 30315",
    description:
      "Owner Rahel Belfield dreamed of a cozy place where she could take her daughter Salomae to have a good cup of coffee and tasty treats. That dream has become Grant Park Coffeehouse and we welcome you to share in our hospitality.",
    area: "Grant Park/Ormewood",
    coffeeBrand: "Grant Park Ethiopian Coffee"
  }
];

async function main() {
  let createdShops;

  try {
    await mongoose.connect(
      "mongodb://heroku_h05lv8xk:pk9qsmle95olhbmcn2a4vgvov5@ds261072.mlab.com:61072/heroku_h05lv8xk",
      { useNewUrlParser: true }
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("there was an error connecting to mongodb");
    console.log(error);
    process.exit(1);
  }

  try {
    await db.CoffeeShops.deleteMany({});
    console.log("deleted existing coffee shops");
  } catch (error) {
    console.log("error deleting coffeeshops");
    console.log(error);
    process.exit(1);
  }

  try {
    createdShops = await db.CoffeeShops.collection.insertMany(coffeeShops);
    console.log("Shops have been created");
  } catch (error) {
    console.log("error inserting coffeeshops");
    console.log(error);
    process.exit(1);
  }

  try {
    await db.Reviews.deleteMany({});
  } catch (error) {
    console.log("error deleting existing reviews");
    console.log(error);
    process.exit(1);
  }

  try {
    await asyncForEach(createdShops.ops, async shop => {
      const review = await db.Reviews.create({
        coffeeShopId: shop._id,
        coffeeShopName: shop.name,
        reviewer: faker.name.findName(),
        review_text: faker.lorem.paragraph()
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  console.log("Clearing Index");
  await index.clearIndex();
  // (err, content) => {
  //   if (err) throw err;

  //   console.log(content);
  // });

  console.log("Adding coffeeshops");
  await index.addObjects(createdShops.ops);
  // , (err, content) => {
  //   console.log(content);
  // });

  process.exit(0);
}

main();
