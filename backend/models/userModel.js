const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    rut:{
        type: String,
        minLenght: [8, 'Porfavor ingrese un RUT válido'],
        maxLenght: [9, 'Porfavor ingrese un RUT válido'],
        required: true
    },
    estado:{
        type: String,
        enum: ['Restringido','Autorizado'],
        required:true 
    },
    tipoUsuario:{
        type:String,
        enum:['Usuario','Administrador'],
        required:true
    }
})

module.exports = mongoose.model('userModel',UserSchema);