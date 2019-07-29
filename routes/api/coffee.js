const router = require("express").Router();
const Controller = require("../../controllers");

// router.get("/coffee", function(req, res) {
//   models.coffeeShop.create({
//     name: "Best coffee ever!",
//     address: "123 Main st",
//     description: "Best infuraiting coffee ever"
//   });
//   res.sendStatus(200);
// });

router.route("/").get(Controller.Coffee.findAll);

router
  .route("/:id")
  .get(Controller.Coffee.findById)
  .delete(Controller.Coffee.remove);

module.exports = router;
