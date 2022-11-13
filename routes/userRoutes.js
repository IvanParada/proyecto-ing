const express = require('express');
const api = express.Router();
const userController = require('../controllers/userController');

api.post('/userModel', userController.createUser);
api.get('/userModels', userController.getUsers);
api.get('/userModels/search/:id', userController.getSpecificUser);
api.put('/userModels/update/:id', userController.updateUser);
api.delete('/userModels/delete/:id', userController.deleteUser);

module.exports = api;