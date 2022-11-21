const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReservaSchema =  new Schema({
    fecha:{
        type: Date,
        required: true,
    },
    hora_inicio:{
        type: Date,
        required: true
    },
    cant_horas:{
        type: Number,
        required: true,
        max: 6 
    },
    cant_personas:{
        type: Number,
        required: true
    },
    tipoID:{
        type: Schema.ObjectId,
        ref: 'categoriaModel'
    },
    userID:{
        type: Schema.ObjectId,
        ref: 'userModel'
    }
})

module.exports = mongoose.model('reserva', ReservaSchema);