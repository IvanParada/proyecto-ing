const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const espacioComunSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    aforo:{
        type: Number,
        required: true,
    },
    disponibilidad:{
        type: String,
        enum: ['Disponible','No disponible'],
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('espacioComunModel',espacioComunSchema);