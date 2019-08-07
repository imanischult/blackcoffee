const db = require("../models");


module.exports = {
    findAll: function(req, res) {
        console.log("searching... " + req);
        db.Reviews
          .find({})
          .sort({ date: -1 }) //find only the first 10
          .then(dbRev => {res.json(dbRev)
          })
          .catch(err => res.status(422).json(err));
      },
      findByShop: function(req, res) {
        console.log("searching... " + req);
        db.Reviews
          .find({
              //coffee shop ID (whatever we called that) matches the param sent by the API util;
          })
          .sort({ date: -1 }) //this one should find all the reviews associated with a particular shop
          .then(dbShop => {res.json(dbShop)
          })
          .catch(err => res.status(422).json(err));
      },
};