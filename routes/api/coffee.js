const router = require('express').Router();
const models = require('../../models');

router.get('/coffee', function(req, res) {
    models.coffeeShop.create({
        name: 'Best cofvefe ever!',
        address: "123 Main st",
        description: "Best infuraiting coffee wver"
    })
   res.sendStatus(200)
});


module.exports = router;