const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  coffeeShopId: { type: Schema.Types.ObjectId, required: true },
  user_name: { type: String, required: true },
  review_text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const reviews = mongoose.model("reviews", reviewsSchema);

module.exports = reviews;
