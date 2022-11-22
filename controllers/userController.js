const userModel = require('../models/userModel');

const createUser  = (req, res) => {
    const {nombres, apellidos, rut, estado, tipoUsuario} = req.body;
    const newUser = new userModel({
        nombres,
        apellidos,
        rut,
        estado,
        tipoUsuario
    });
    newUser.save((err, userModel) => {
        if (err) {
            return res.status(400).send({message:"Error al crear el usuario"})
        }
        return res.status(201).send(userModel)
    });
}

const getUsers = (req, res) => {
    userModel.find({}, (err, userModels) => {
        if (err) {
            return res.status(400).send({message:"Error al obtener los usuarios"})
        }
        return res.status(200).send(userModels)
    })
}

const getSpecificUser = (req, res) => {
    const {id} = req.params;
    userModel.findById(id ,(err, userModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!userModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(userModels)
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    userModel.findByIdAndUpdate(id, req.body, (err, userModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!userModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(userModels)
    })
    
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    userModel.findByIdAndDelete(id ,(err, userModels) => {
        if(err){
            return res.status(400).send({ message: "Error al oobtener el usuario"})
        }
        if(!userModels){
            return res.status(404).send({ message:  "Usuario no encontrado"})
        }
        return res.status(200).send(userModels)
    })
    
}

module.exports = {
    createUser,
    getUsers,
    getSpecificUser,
    updateUser,
    deleteUser
}