const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bCoffeeSchema = new Schema({
  Name: { type: String, required: true },
  Address: { type: String, required: true },
  Description: {String, required: true},
  Area: { type: String, default: true },
  CoffeeBrand: { type: String, default: true }
});

const BCoffee = mongoose.model("BlackCoffee", bCoffeeSchema);

module.exports = BCoffee;