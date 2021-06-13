const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');

module.exports = function(){
    router.post('/create', controller.createCategory);
    router.get('/', controller.getCategory);
    router.get('/:id', controller.getVehicleForCategory);
    router.get('/amount/:id', controller.calculateAmount);
    router.get('/getamount', controller.calculateTotalAmountForSerOfCategorie);
    return router;
}