const express = require('express');
const api = express.Router();
const categoriaController = require('../controllers/categoriaController');

api.post('/categoriaModel', categoriaController.createCategoria);
api.get('/categoriaModels', categoriaController.getCategorias);
api.get('/categoriaModels/search/:id', categoriaController.getSpecificCategoria);
api.put('/categoriaModels/update/:id', categoriaController.updateCategoria);
api.delete('/categoriaModels/delete/:id', categoriaController.deleteCategoria);

module.exports = api;