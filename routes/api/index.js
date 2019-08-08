const path = require("path");
const router = require("express").Router();
const coffeeRoutes = require("./coffee");
const reviewRoutes = require("./reviews");

// Coffee Routes
router.use("/coffee", coffeeRoutes);
router.use("/reviews", reviewRoutes);
<<<<<<< HEAD
=======

>>>>>>> d79d44e63e97aaf9eace4da4a6b7c95c3c3bc5f8

// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/public/index.html"));
//   });

module.exports = router;
