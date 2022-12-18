import { useState, useEffect } from "react"
import {Button, Container, Input, Stack, Text, HStack, Heading, Table, Thead, Tbody, Tfoot,Tr, Th, Td, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from "next/router"

export default function Home() {

    const [userModels, setUser] = useState([])
    const router = useRouter()
    const getUsers = async () => {
        const response = await axios.get(`${process.env.API_URL}/userModels`)
        setUser(response.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const showUsers = () => {
        return userModels.map(user => {
            return(
                <Tr key = {user._id}>
                    <Td>{user.nombres}</Td>
                    <Td>{user.apellidos}</Td>
                    <Td>{user.rut}</Td>
                    <Td>{user.estado}</Td>
                    <Td>{user.tipoUsuario}</Td>
                    <Td><Button onClick={() => router.push(`/usuario/${user._id}`)}> Ver</Button></Td>
                </Tr>
            )
        })
    }


    return(
    <Container maxW="container.xl" centerContent>
        <Heading textAlign={"center"} my={10}> Visualizar Usuarios </Heading>
        <Button colorScheme="purple" onClick={() => router.push('/crearUsuarios')}>Crear Usuario</Button>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Td>Nombres</Td>
                    <Td>Apellidos</Td>
                    <Td>RUT</Td>
                    <Td>Estado</Td>
                    <Td>tipoUsuario</Td>
                </Tr>
                {showUsers()}
            </Thead>
        </Table>
    </Container>
    )
}
