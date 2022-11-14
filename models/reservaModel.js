const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReservaSchema =  new Schema({
    fecha:{
        type: Number,
        required: true,
    },
    hora_inicio:{
        type: Number,
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