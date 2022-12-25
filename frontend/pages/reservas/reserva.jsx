import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container, Heading, Input, Button, Stack, Flex, Box, Spacer, Select, product } from '@chakra-ui/react'
import {Td, Thead, Table, Tr, Tbody} from '@chakra-ui/react'
import axios from 'axios'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import {getReserva} from '../../data/reservas'
import { useRouter } from 'next/router'



const reserva = () => {


  const [reserva, setReserva] = useState([{
        fecha_reserva:'',
        hora_inicio: '',
        cant_horas: '',
        cant_personas: '',
        espacioId: '',
        userId: ''
      }])

  const getReserva = async() => {
    try {
      const response = await axios.get(`${process.env.SERVIDOR}/reserva`)
      setReserva(response.data)
      console.log(response.data)
      return response
        
    } catch (error) {
      console.log(error)
      
    }
    

  }
  const router= useRouter()
  
  const contentReserva = () => {
    return reserva.map(reserva => {
      return (

        <Tr key={reserva.userId}>
            <Td>{reserva.fecha_reserva}</Td>
            <Td>{reserva.hora_inicio}</Td>
            <Td>{reserva.cant_horas}</Td>
            <Td>{reserva.cant_personas}</Td>
            <Td>{reserva.espacioId}</Td>
        </Tr>
      )
    })


  }


 useEffect(() => {
    getReserva().then(res => {
      setReserva(res.data)
    })
   console.log(reserva)
  
 }, []) 
 
  return (
  <Container maxW="container.xl" >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}> Administracion Reservas</Heading>
        <Button colorScheme="blue" mt="18" mb="18" onClick={() => router.push('./reservas')}>Agregar Reserva</Button>
        <Stack spacing={4} mt="10">
          <Table variant="simple">
            <Thead>
              <Tr>
              <Td>Nombre Reservante</Td>
              <Td>Nombre Espacio a Reservar</Td>
              <Td>Fecha Reserva</Td>
              <Td>Cantidad Personas</Td>
              <Td></Td>
              </Tr>
            </Thead>
            <Tbody>
              {contentReserva()}
            </Tbody>
          </Table>
        </Stack>
        </Container>
        ) 
 
 
 







      
  {/*  <Container maxW="container.xl" my={50}>
  <Menu isLazy>
  <MenuButton>Abrir Menu</MenuButton>
  <MenuList> 
    <MenuItem>Reservar</MenuItem>
    <MenuItem>Open Closed Tab</MenuItem>
    <MenuItem>Open File</MenuItem>
  </MenuList>
  </Menu>
  </Container> */}



  {/*<Container maxW="container.md">
    <Heading as={"h2"} textAlign={"left"}>
    <Select placeholder='Selecionar Reserva'>
      <option value='option1'>Reserva 1</option>
      <option value='option2'>Reserva 2</option>
      <option value='option3'>Reserva 3</option>
    </Select> 
    </Heading>
  </Container>
        */}

}

export default reserva
