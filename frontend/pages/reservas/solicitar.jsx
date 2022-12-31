import { useState, useEffect } from "react"
import { Button, Box, Container, Input, Stack, Text, HStack, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from "next/router"

export const espacios = () => {

    const router = useRouter()
    const [espacioComunModels, setEspacios] = useState([{
        nombre:'',
        aforo:'',
        disponibilidad:'',
        descripcion:'',
        estado:''
    }])
    
    const getEspacios = async () => {
        const response = await axios.get(`${process.env.API_URL}/espacioComunModels`)
        setEspacios(response.data)
    }

    useEffect(() => {
        getEspacios()
    }, [])
    
    const contentTable = () => {
        return espacioComunModels.map(espacioComun => {
            return (
                <Tr key={espacioComun._id}>
                    <Td>{espacioComun.nombre}</Td>
                    <Td>{espacioComun.aforo}</Td>
                    <Td>{espacioComun.disponibilidad}</Td>
                    <Td>{espacioComun.descripcion}</Td>
                    <Td>{espacioComun.estado}</Td>
                    <Td><Button bgGradient='linear(to-l, #000066, #6699FF)' _hover={{
                        bgGradient: 'linear(to-r, pink.100, purple.100)',
                    }} color='white' onClick={() => router.push(`/reservas/seleccionar/${espacioComun._id}`)}>Seleccionar</Button></Td>
                </Tr>
            )
        })
    }

    return (
        <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
            <Box bg='#DAEDEC' boxShadow='dark-lg' padding='20' margin='5' rounded='lg' color='black' >
                <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Solicitar reserva </Heading>
                <Table variant='simple' colorScheme="black" rounded='lg' >
                    <Thead>
                        <Tr>
                            <Td><b>Nombre</b></Td>
                            <Td><b>Aforo</b></Td>
                            <Td><b>Disponibilidad</b></Td>
                            <Td><b>Descripción</b></Td>
                            <Td><b>Estado</b></Td>
                            <Td><b>Acciones</b></Td>
                        </Tr>
                        {contentTable()}
                    </Thead>
                </Table>
            </Box>
        </Container>
    )
}

export default espacios