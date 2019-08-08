const router = require("express").Router();
const Controller = require("../../controllers");

router.route("/").get(Controller.Coffee.findAll);

router
  .route("/:name")
  .get(Controller.Coffee.findByName)
  .delete(Controller.Coffee.remove);

module.exports = router;
