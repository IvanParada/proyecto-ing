const reservaModel = require('../models/reservaModel');


const createReserva = (req, res) => {
    const {fecha, hora_inicio, cant_horas,cant_personas, tipoID, userID } = req.body
    const newReserva = new reservaModel({
        fecha,
        hora_inicio,
        cant_horas,
        cant_personas,
        tipoID,
        userID
    });
    newReserva.save((err, reservaModel)=>{
        if(err){
            return res.status(400).send({message: "No se ha podido crear la solicitud de reserva"})
        }
        return res.status(201).send(reservaModel)
    });
}

const getReservas = (req , res) => {
    reservaModel.find({},(err, reservaModels)=> {
        if(err){
            return res.status(400).send({ message: " No se ha podido obtener los registros de reservas"})
        }
        return res.status(201).send(reservaModels)
    });
}

const getSpecificReserva = (req, res) => {
    const{id} = req.params
    reservaModel.findById(id,(err,reservaModels) => {
        if(err){
            return res.status(400).send({message: "No se ha podido obtener el registro de la reserva"})
        }
        if(!reservaModels){
            return res.status(404).send({message:"Reserva no encontrada"})
        }
        return res.status(201).send(reservaModels)
    });
}

const updateReserva = (req, res) => {
    const {id} = req.params;
    reservaModel.findByIdAndUpdate(id, req.body, (err, reservaModels) => {
        if(err){
            return res.status(400).send({ message: "No se ha podido obtener el registro de la reserva"})
        }
        if(!reservaModels){
            return res.status(404).send({ message:  "Reserva no encontrada"})
        }
        return res.status(200).send(reservaModels)
    });
    
}

const deleteReserva = (req, res) => {
    const {id} = req.params;
    reservaModel.findByIdAndDelete(id ,(err, reservaModels) => {
        if(err){
            return res.status(400).send({ message: "No se ha podido obtener el registro de la reserva"})
        }
        if(!reservaModels){
            return res.status(404).send({ message:  "Reserva no encontrada"})
        }
        return res.status(200).send(reservaModels)
    });
    
}

module.exports = {
    createReserva,
    getReservas,
    getSpecificReserva,
    updateReserva,
    deleteReserva

}