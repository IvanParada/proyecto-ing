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
        type: Number,
        required: true
    },
    solicitud:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userModel',UserSchema);