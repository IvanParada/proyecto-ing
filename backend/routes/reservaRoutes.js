const express = require('express')
const api = express.Router()
const reservaController = require('../controllers/reservaController');

api.post('/reservaModel', reservaController.createReserva);
api.get('/reservaModels', reservaController.getReservas);
api.get('/reservaModels/search/:id', reservaController.getSpecificReserva);
api.put('/reservaModels/update/:id', reservaController.updateReserva);
api.delete('/reservaModels/delete/:id', reservaController.deleteReserva);

module.exports = api;