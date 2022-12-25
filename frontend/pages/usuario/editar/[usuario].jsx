import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import axios from 'axios'

export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/userModels/search/${user._id}`)
        return {
            props: {
                data: null
            }
        }
    } catch (err) {
         return {
            redirect: {
                destination: '../ver/'
            }
         }
    }
}

const Editar = (data) => {

    const router = useRouter()
    const {usuario} = router.query
    const [user] = useState(data)
    console.log(user)

    return (
        <h1>La pagina es {usuario.data.nombres} </h1>
    )
}

export default Editar