import { useState, useEffect } from "react"
import {Button, Box,Container, Input, Stack, Text, HStack, Heading, Table, Thead, Tbody, Tfoot,Tr, Th, Td, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from "next/router"


const Usuarios = () => {

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
                    <Td><Button bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.100, purple.100)',
  }} color='white' onClick={() => router.push(`/usuario/ver/${user._id}`)}> Ver más ...</Button></Td>
                </Tr>
            )
        })
    }


    return(
    <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
         <Box bg='#DAEDEC' boxShadow='dark-lg' padding='20' margin='5'  rounded='lg' color='black' >
        <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Visualizar Usuarios </Heading>
        <Button margin='5' bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.500)',
  }} color='white' onClick={() => router.push('/usuario/crearUsuarios') }>Crear Usuario</Button>
        <Table variant='simple' colorScheme="black"  rounded='lg' >
            <Thead>
                <Tr>
                    <Td><b>Nombres</b></Td>
                    <Td><b>Apellidos</b></Td>
                    <Td><b>RUT</b></Td>
                    <Td><b>Estado</b></Td>
                    <Td><b>Rol de Usuario</b></Td>
                    <Td><b>Acciones</b></Td>
                </Tr>
                {showUsers()}
            </Thead>
        </Table>
        </Box>
    </Container>
    )
}

export default Usuarios