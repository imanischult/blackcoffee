const mongoose = require("mongoose");
const faker = require("faker"); // faker is used to insert fake data https://github.com/marak/Faker.js/
const db = require("../models");
const algoliasearch = require("algoliasearch");
const client = algoliasearch("V63NYRH7LN", "••••••••••••••••••••");
const index = client.initIndex("coffeeshops");

async function asyncForEach(array, callback) {
  console.log("looping over", array.length, " items.");
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const coffeeShops = [
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

async function main() {
  let createdShops;

  index.addObjects(coffeeShops, (err, content) => {
    console.log(content);
  });

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
    await db.coffeeShop.deleteMany({});
    console.log("deleted existing coffee shops");
  } catch (error) {
    console.log("error deleting coffeeshops");
    console.log(error);
    process.exit(1);
  }

  try {
    createdShops = await db.coffeeShop.collection.insertMany(coffeeShops);
    console.log("Shops have been created");
  } catch (error) {
    console.log("error inserting coffeeshops");
    console.log(error);
    process.exit(1);
  }

  try {
    await db.reviews.deleteMany({});
  } catch (error) {
    console.log("error deleting existing reviews");
    console.log(error);
    process.exit(1);
  }

  try {
    await asyncForEach(createdShops.ops, async shop => {
      const review = await db.reviews.create({
        coffeeShopId: shop._id,
        user_name: faker.name.findName(),
        review_text: faker.lorem.paragraph()
      });
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  process.exit(0);
}

main();
