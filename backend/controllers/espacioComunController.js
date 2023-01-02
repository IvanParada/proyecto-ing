const espacioComunModel = require('../models/espacioComunModel');

const createEspacioComun  = (req, res) => {
    const {nombre, aforo, disponibilidad, descripcion, estado} = req.body;
    const espacioComun = new espacioComunModel({
        nombre,
        aforo,
        disponibilidad,
        descripcion,
        estado
    });
    espacioComun.save((err, espacioComunModel) => {
        if (err) {
            return res.status(400).send({message:"Error al crear el espacio común"})
        }
        return res.status(201).send(espacioComunModel)
    });
}

const getEspaciosComunes = (req, res) => {
    espacioComunModel.find({}, (err, espacioComunModels) => {
        if (err) {
            return res.status(400).send({message:"Error al obtener los espacios comunes"})
        }
        return res.status(200).send(espacioComunModels)
    });
}

const getSpecificEspacioComun = (req, res) => {
    const {id} = req.params;
    espacioComunModel.findById(id ,(err, espacioComunModels) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener el espacio común"})
        }
        if(!espacioComunModels){
            return res.status(404).send({ message:  "Espacio común no encontrado"})
        }
        return res.status(200).send(espacioComunModels)
    });
}

const updateEspacioComun = (req, res) => {
    const {id} = req.params;
    espacioComunModel.findByIdAndUpdate(id, req.body, (err, espacioComunModels) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener el espacio común"})
        }
        if(!espacioComunModels){
            return res.status(404).send({ message:  "Espacio común no encontrado"})
        }
        return res.status(200).send(espacioComunModels)
    });
    
}

const deleteEspacioComun = (req, res) => {
    const {id} = req.params;
    espacioComunModel.findByIdAndDelete(id ,(err, espacioComunModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el espacio común"})
        }
        if(!espacioComunModels){
            return res.status(404).send({ message:  "Espacio común no encontrado"})
        }
        return res.status(200).send(espacioComunModels)
    });
    
}

module.exports = {
    createEspacioComun,
    getEspaciosComunes,
    getSpecificEspacioComun,
    updateEspacioComun,
    deleteEspacioComun
}