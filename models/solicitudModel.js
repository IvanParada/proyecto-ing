const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SolicitudSchema = new Schema({
    nombres:{
        type: Schema.ObjectID,
        ref:'userModel'
    },
    apellidos:{
        type: Schema.ObjectID,
        ref:'userModel'
    },
    espacioComun:{
        type: Schema.ObjectID,
        ref : 'espacioComun'
    }

})

module.exports = mongoose.model('solicitudModel');