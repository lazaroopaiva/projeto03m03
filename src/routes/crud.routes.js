const route = require('express').Router();
const characterController = require('../controllers/crud.controller');

route.get('/characters', characterController.findAllCrudController);
route.get('/find/:id', characterController.findByIdCrudController);
route.post('/create', characterController.createCrudController);
route.put('/update/:id', characterController.updateCrudController);
route.delete('/delete/:id', characterController.deleteCrudController);

module.exports = route;
