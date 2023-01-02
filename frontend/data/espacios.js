import axios from "axios";

const createEspacioComun = async (espacio) => {
    const response = await axios.post(`${process.env.API_URL}/espacioComunModel`,{
        nombre: espacio.nombre,
        aforo: espacio.aforo,
        disponibilidad: espacio.disponibilidad,
        descripcion: espacio.descripcion,
        estado: espacio.estado
    });
    return response
}

const getEspaciosComunes = async() => {
    const response = await axios.get(`${process.env.API_URL}/espacioComunModels`);
    return response
}

const getSpecificEspacioComun = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/espacioComunModels/search/${id}`)
    return response
}

const deleteEspacioComun = async (id) => {
    const response = await axios.delete(`${process.env.API_URL}/espacioComunModels/delete/${id}`)
    return response
}

const updateEspacioComun = (id, espacio) => {
    const response = axios.put(`${process.env.API_URL}/espacioComunModels/update/${id}`, espacio)
    return response
}


module.exports = {
    createEspacioComun,
    getEspaciosComunes,
    getSpecificEspacioComun,
    deleteEspacioComun,
    updateEspacioComun,
}