import axios from "axios"

const createEspacio = (espacio) => {
    const response = axios.post(`${process.env.API_URL}/espacioComunModel`,{
        nombre: espacio.nombre,
        aforo: espacio.aforo,
        disponibilidad: espacio.disponibilidad,
        descripcion: espacio.descripcion,
        estado: espacio.estado
    });
    return response
}

const getEspacios = async() => {
    const response = await axios.get(`${process.env.API_URL}/espacioComunModels`);
    return response
}

const getEspacio = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/espacioComunModels/search/${id}`)
    return response
}

const deleteEspacio = async (id) => {
    const response = await axios.delete(`${process.env.API_URL}/espacioComunModels/delete/${id}`)
    return response
}

const updateEspacio = (id, espacio) => {
    const response = axios.put(`${process.env.API_URL}/espacioComunModels/update/${id}`, espacio)
    return response
}


// const login = async(rut) => {
//     const response = await axios.post(`${process.env.API_URL}/user/login`,{rut})
//     return response
// }
module.exports = {
    createEspacio,
    getEspacios,
    getEspacio,
    deleteEspacio,
    updateEspacio
    // login
}