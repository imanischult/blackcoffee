const db = require("../models");

// db.Reviews.create({coffeeShopName: "Village Coffee", coffeeShopId: "5d4babd038cbe0558ac4d9a7", reviewer: "Rabbit", review_text: "good sammiches"}).then(something => console.log(something))

// db.Reviews.find({}).then(dbShop => {
//   console.log(dbShop)
//   })
module.exports = {
  findAll: function (req, res) {
    console.log("finding all reviews... ");
    db.Reviews
      .find({})
      .sort({ date: -1 }) //find only the first 10
      .then(dbRev => {
        res.json(dbRev)
      })
      .catch(err => res.status(422).json(err));
  },
  findByShop: function (req, res) {
    console.log(`searching for reviews... ${req.params.shop}`);
    db.Reviews
      .find(
        { coffeeShopName: req.params.shop}
      )
      .sort({ date: -1 }) //this one should find all the reviews associated with a particular shop
      .then(dbShop => {
        res.json(dbShop)
      })
      .catch(err => res.status(422).json(err));
  },
  createReview: function (req, res) {
    console.log(`adding review... ${req}`);
    db.Reviews
      .create(req)
      .then(dbReview => {res.json(dbReview)})
      .catch(err => res.status(422).json(err));
  }
};