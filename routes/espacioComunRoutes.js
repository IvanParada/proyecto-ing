const express = require('express');
const api = express.Router();
const espacioComunController = require('../controllers/espacioComunController');

api.post('/espacioComunModel', espacioComunController.createEspacioComun);
api.get('/espacioComunModels', espacioComunController.getEspaciosComunes);
api.get('/espacioComunModels/search/:id', espacioComunController.getSpecificEspacioComun);
api.put('/espacioComunModels/update/:id', espacioComunController.updateEspacioComun);
api.delete('/espacioComunModels/delete/:id', espacioComunController.deleteEspacioComun);

module.exports = api;