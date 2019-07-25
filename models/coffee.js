const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeShopSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: String,
  area: { type: String, default: true },
  coffeeBrand: { type: String, default: true }
});

const coffeeShop = mongoose.model("coffeeShop", coffeeShopSchema);

module.exports = coffeeShop;