import axios from "axios";

const createUser = async (user) => {
    const response = await axios.post(`${process.env.API_URL}/userModel`,{
        nombres:user.nombres,
        apellidos: user.apellidos,
        rut: user.rut,
        estado: user.estado,
        tipoUsuario: user.tipoUsuario
    });
    return response
}
const getUser = async() => {
    const response = await axios.get(`${process.env.API_URL}/userModels`);
    return response
}

const getUsers = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/userModels/search/${id}`)
    return response
}

const deleteUsers = async (id) => {
    const response = await axios.delete(`${process.env.API_URL}/userModels/delete/${id}`)
    return response
}

const updateUser = (id, user) => {
    const response = axios.put(`${process.env.API_URL}/userModels/update/${id}`,{
        nombres:user.nombres,
        apellidos: user.apellidos,
        rut: user.rut,
        estado: user.estado,
        tipoUsuario: user.tipoUsuario
    });
    return response
}


module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUsers,
    updateUser,
}