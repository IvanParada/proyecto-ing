import * as yup from 'yup'

const espaciosValidation = yup.object({
    nombre: yup.string().min(6,"Este espacio debe tener un mínimo de 6 caracteres").max(40,"Este espacio no puede tener más de 40 caracteres")
    .required("Este espacio es obligatorio")
    .matches(/^[a-zA-Z0-9\s]*$/,"Este espacio no puede tener caracteres especiales"),

    aforo: yup.number().min(5,"El aforo no puede ser menos de 5 personas").max(30,"El aforo no puede exceder las 30 personas")
    .typeError("Los caracteres tienen que ser números")
    .required("Este espacio es obligatorio"),

    descripcion: yup.string().min(20,"Este espacio debe tener un mínimo de 20 caracteres").max(60,"Este espacio no puede tener más de 60 caracteres")
    .required("Este espacio es obligatorio")
    .matches(/^[a-zA-Z0-9\s]*$/,"Este espacio no puede tener caracteres especiales"),

    estado: yup.string().min(5,"Este espacio debe tener un mínimo de 5 caracteres").max(25,"Este espacio no puede tener más de 25 caracteres")
    .required("Este espacio es obligatorio")
    .matches(/^[a-zA-Z\s]*$/,"Este espacio solo debe tener letras")
})

export default espaciosValidation

// nombre:{
//     type: String,
//     required: true
// },
// aforo:{
//     type: Number,
//     required: true,
// },
// disponibilidad:{
//     type: String,
//     enum: ['Disponible','No disponible'],
//     required: true
// },
// descripcion:{
//     type: String,
//     required: true
// },
// estado:{
//     type: String,
//     required: true
// }
// })