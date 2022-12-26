import axios from "axios";

const createUser = async () => {
    const response = await axios.post(`${process.env.API_URL}/userModel`);
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
    const response = axios.put(`${process.env.API_URL}/userModels/update/${id}`, user)
    return response
}


const login = async(rut) => {
    const response = await axios.post(`${process.env.API_URL}/user/login`,{rut})
    return response
}
module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUsers,
    updateUser,
    login
}