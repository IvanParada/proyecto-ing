const categoriaModel = require('../models/categoriaModel');

const createCategoria  = (req, res) => {
    const {tipo, aforo, disponibilidad} = req.body;
    const newCategoria = new categoriaModel({
        tipo,
        aforo,
        disponibilidad
    });
    newCategoria.save((err, categoriaModel) => {
        if (err) {
            return res.status(400).send({message:"Error al crear el espacio común"})
        }
        return res.status(201).send(categoriaModel)
    });
}

const getCategorias = (req, res) => {
    categoriaModel.find({}, (err, categoriaModels) => {
        if (err) {
            return res.status(400).send({message:"Error al obtener los espacios comunes"})
        }
        return res.status(200).send(categoriaModels)
    });
}

const getSpecificCategoria = (req, res) => {
    const {id} = req.params;
    categoriaModel.findById(id ,(err, categoriaModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!categoriaModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(categoriaModels)
    });
}

const updateCategoria = (req, res) => {
    const {id} = req.params;
    categoriaModel.findByIdAndUpdate(id, req.body, (err, categoriaModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!categoriaModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(categoriaModels)
    });
    
}

const deleteCategoria = (req, res) => {
    const {id} = req.params;
    categoriaModel.findByIdAndDelete(id ,(err, categoriaModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!categoriaModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(categoriaModels)
    });
    
}

module.exports = {
    createCategoria,
    getCategorias,
    getSpecificCategoria,
    updateCategoria,
    deleteCategoria
}