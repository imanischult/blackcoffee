const router = require('express').Router;
const models = require('../../models');

router.get('/coffee', function(req, res) {
    console.log(models.coffeeShop)
})