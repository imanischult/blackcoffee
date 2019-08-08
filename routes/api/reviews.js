const router = require("express").Router();
const Controller = require("../../controllers");

router
  .route("/")
  .get(Controller.Reviews.findAll)
  .post(Controller.Reviews.createReview);

router
  .route("/:shop")
  .get(Controller.Reviews.findByShop);
  

module.exports = router;