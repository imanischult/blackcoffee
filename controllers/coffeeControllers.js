const db = require("../models")

// Defining methods for the CoffeeShopssController

// db.CoffeeShops.create({name: "Buzz", address: "2315 Cascade Rd SW, Atlanta, GA 30311", description: "BUZZ will be a premier stop for art, culture, and community. We will feature premium coffee from Stumptown Coffee Roasters as well as Old World and New World Wines in an art filled setting.", area: "South Atlanta", coffeeBrand: "Stumptown Coffee Roasters"}).then(something => console.log(something))

// db.CoffeeShops.find({}).then(dbShop => {
//   console.log(dbShop)
//   })
module.exports = {
    findAll: function(req, res) {
      console.log("searching... " + req);
      db.CoffeeShops
        .find({})
        .sort({ name: -1 })
        .then(dbShop => {res.json(dbShop)
        })
        .catch(err => res.status(422).json(err));
    },
    findByName: function(req, res) {
      db.CoffeeShops
        .find({
          name: req.params.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.CoffeeShops
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.CoffeeShops
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.CoffeeShops
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };