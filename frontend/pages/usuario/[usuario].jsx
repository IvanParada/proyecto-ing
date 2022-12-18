import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'

export async function getServerSideProps(context) {
    console.log("URL DE QUERY =>>>>>>>>>>", context.params.usuario)
    try {
        const response = await axios.get(`${process.env.API_URL}/userModels/search/${context.params.usuario}`)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err){
        return {
            props: {
                data: null
            }
        }
    }
}

const Usuario = (data) => {
    console.log(data)
    const router = useRouter()
    const {usuario} = router.query
    const [user, setUser] = useState()

    // const getUsers = async () => {
    //     const response = await axios.get(`${process.env.API_URL}/userModels/search/${usuario}`)
    //     setUser(response.data)
    // }

    // useEffect(() => {
    //     try{
    //         getUsers()
    //     } catch (err) {
    //         console.log(user)
    //     }
    //     console.log(user)
    // }, [user])

    return (
        <h1>La pagina es {usuario} </h1>
    )
}



export default Usuario