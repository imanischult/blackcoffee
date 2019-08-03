const router = require("express").Router();
const Controller = require("../../controllers");

router.route("/").get(Controller.Reviews.findAll);

router
  .route("/:shop")
  .get(Controller.Reviews.findByShop)
  .delete(Controller.Reviews.remove);

module.exports = router;