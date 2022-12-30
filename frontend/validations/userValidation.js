import * as yup from 'yup'

const userValidation = yup.object({
    nombres: yup.string()
    .required("Nombres obligatorios")
    .matches(/^[a-zA-Z ]*$/, "Nombres no puede contener caracteres especiales"),
    apellidos: yup.string()
    .required("Apellidos obligatorios")
    .matches(/^[a-zA-Z ]*$/, "Apellidos no puede contener caracteres especiales"),
    rut: yup.string()
    .matches(/^[kK0-9 ]*$/, "El RUT no puede contener caracteres especiales")
    .min(8,"El rut no es válido")
    .max(9,"El rut no es válido"),
    estado: yup.string()
    .required("Estado obligatorio")
    .matches(/^[a-zA-Z]*$/, "Nombres no puede contener caracteres especiales, ni números"),
    tipoUsuario: yup.string()
    .required("Tipo de usuario obligatorio")
    .matches(/^[a-zA-Z]*$/, "Nombres no puede contener caracteres especiales, ni números"),
})

export default userValidation

