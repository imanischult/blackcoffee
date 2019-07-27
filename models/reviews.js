const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  coffeeShopName: { type: String, required: true },
  user_name: { type: String, required: true },
  review_text: String,
  date: { type: Date, default: Date.now }
});

const reviews = mongoose.model("reviews", reviewsSchema);

module.exports = reviews;
