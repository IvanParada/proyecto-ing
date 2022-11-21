const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SolicitudSchema = new Schema({
    nombre:{
        type: Schema.ObjectID,
        ref:'userModel'
    },
})

module.exports = mongoose.model('solicitudModel');