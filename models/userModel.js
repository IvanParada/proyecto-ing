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
        required: true
    },
    solicitud:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        enum: ['Restringido','Autorizado'],
        required:false 
    }
})

module.exports = mongoose.model('userModel',UserSchema);