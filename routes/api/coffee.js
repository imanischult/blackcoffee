const router = require("express").Router();
const Controller = require("../../controllers");

<<<<<<< HEAD
router.get('/coffee', function(req, res) {
    models.coffeeShop.create({
        name: 'Best cofvefe ever!',
        address: "123 Main st",
        description: "Best infuriating coffee ever"
    })
   res.sendStatus(200)
});
=======
// router.get("/coffee", function(req, res) {
//   models.coffeeShop.create({
//     name: "Best coffee ever!",
//     address: "123 Main st",
//     description: "Best infuraiting coffee ever"
//   });
//   res.sendStatus(200);
// });
>>>>>>> 73d23f42d770b7d142d7faad6f5169fa75c76059

router.route("/").get(Controller.Coffee.findAll);

router
  .route("/:id")
  .get(Controller.Coffee.findById)
  .delete(Controller.Coffee.remove);

module.exports = router;
