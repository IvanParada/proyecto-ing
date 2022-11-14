const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategoriaSchema = new Schema({
    tipo:{
        type: String,
        required: true
    },
    aforo:{
        type: Number,
        required: true,
    },
    disponibilidad:{
        type: String,
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

module.exports = mongoose.model('categoriaModel',CategoriaSchema);