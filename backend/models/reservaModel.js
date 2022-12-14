const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReservaSchema =  new Schema({
    fecha_reserva:{
        type: Date,
        required: true,
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
    espacioId:{
        type: Schema.ObjectId,
        ref: 'espacioComunModel'
    },
    userId:{
        type: Schema.ObjectId,
        ref: 'userModel'
    }
});
module.exports = mongoose.model('reserva', ReservaSchema);