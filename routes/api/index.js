const router = require("expres").Router();
const coffeeRoutes = require("./coffee");

// Coffee Routes
router.use("/coffee", coffeeRoutes);

module.exports = router;
