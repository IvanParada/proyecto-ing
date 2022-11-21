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
        type: Schema.ObjectId,
        required: 'solicitudModel'
    },
    estado:{
        type: String,
        enum: ['Restringido','Autorizado'],
        required:true 
    }
})

module.exports = mongoose.model('userModel',UserSchema);