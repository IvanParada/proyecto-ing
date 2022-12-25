import axios from "axios";

const getReserva = async() => { 
    const response = await axios.post(`${process.env.API_URL}/reserva`)
    return response 
}

module.exports = {
    getReserva
}