import * as yup from 'yup'


const userValidation = yup.object({
    nombres: yup.string()
    .required("Nombres obligatorios")
    .matches(/^[a-zA-Z\s]*$/, "Nombres no puede contener caracteres especiales"),
    apellidos: yup.string()
    .required("Apellidos obligatorios")
    .matches(/^[a-zA-Z\s]*$/, "Apellidos no puede contener caracteres especiales"),
    rut: yup.string()
    .matches(/^[0-9]*$/, "El RUT solo debe contener números")
    .min(8,"El rut no es válido")
    .max(9,"El rut no es válido"),
    estado: yup.string()
    .required("Estado obligatorio")
    .matches(/^[a-zA-Z]*$/, ""),
    tipoUsuario: yup.string()
    .required("Tipo de usuario obligatorio")
    .matches(/^[a-zA-Z]*$/, ""),
})

export default userValidation

