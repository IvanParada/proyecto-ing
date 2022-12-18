import axios from "axios";

const getUsers = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/userModels/search/${id}`)
    return response
}

const login = async(rut) => {
    const response = await axios.post(`${process.env.API_URL}/user/login`,{rut})
}
module.exports = {
    getUsers,
    login
}