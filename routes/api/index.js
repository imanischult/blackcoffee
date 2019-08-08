const path = require("path");
const router = require("express").Router();
const coffeeRoutes = require("./coffee");

// Coffee Routes
router.use("/coffee", coffeeRoutes);


// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;
