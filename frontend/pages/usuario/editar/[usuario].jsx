// import { useEffect, useState } from "react";
// import {useRouter} from 'next/router'
// import axios from 'axios'
// import {handleChange, onChange, onSubmit, Select, Box, Button, Container, Input, Stack, Heading, FormControl, FormLabel, option, HStack } from '@chakra-ui/react'
// import {getUser, updateUser} from '../../../data/user'


// export async function getServerSideProps(context){
//     try{
//         const response = await axios.get(`${process.env.API_URL}/userModels/search/${context.params.usuario}`)
//         return {
//             props: {
//                 data: response.data
//             }
//         }
//     } catch (err) {
//          return {
//             redirect: {
//                 destination: '../ver/'
//             }
//          }
//     }
// }

// const editar = (data) => {

//     const router = useRouter()
//     const {usuario} = router.query
//     const [user] = useState(data)
//     console.log(user)

//     const [contador, setContador] = useState(1)

//     return(
//         <Container bg='#3C908B' maxW="xxl" centerContent>
//         <Box bg='#DAEDEC' padding='100' margin='20' boxShadow='dark-lg'   rounded='lg' color='black' maxW='md'>
//             <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Editar Usuario</Heading>
//         <Stack>
//             <FormControl isRequired>
//                 <FormLabel>Nombres</FormLabel>
//                 <Input variant='flushed'  placeholder='p. ej.: Ignacio Ignacio' type={"text"} onChange={handleChange} name={"nombres"} value={user.data.nombres}/>
//             </FormControl>
//             <FormControl isRequired>
//                 <FormLabel>Apellidos</FormLabel>
//                 <Input variant='flushed' placeholder='p. ej.: Perez Perez' type={"text"} onChange={handleChange} name={"apellidos"} value={user.data.apellidos}/>
//             </FormControl >
//             <FormControl isRequired>
//                 <FormLabel>RUT</FormLabel>
//                 <Input variant='flushed' placeholder='sin guión, ni puntos' type={"text"} onChange={handleChange} name={"rut"} value={user.data.rut}/>
//             </FormControl>
//             <FormControl isRequired>
//             <FormLabel>Estado</FormLabel>
//             <Select variant='flushed' placeholder='Seleccione el estado del usuario' onChange={handleChange} name={"estado"} value={user.data.estado}>
//                 <option>Autorizado</option>
//                 <option>Restringido</option>
//             </Select>
//             </FormControl>
//             <FormControl isRequired>
//             <FormLabel>Tipo de Usuario</FormLabel>
//             <Select variant='flushed' placeholder='Seleccione el tipo de usuario' onChange={handleChange} name={"tipoUsuario"} value={user.data.tipoUsuario}>
//                 <option>Usuario</option>
//                 <option>Administrador</option>
//             </Select>
//             </FormControl>
//         </Stack>
//         <HStack>
//         <Button  bgGradient='linear(to-l, #1A1A8F, #0000FF)' _hover={{
//     bgGradient: 'linear(to-r, blue.500, blue.300)',
//   }} color='white'   type="submit" my={6} onClick={onSubmit}> Guardar </Button>
//         <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
//     bgGradient: 'linear(to-r, red.500, red.300)',
//   }} color='white' onClick={() => router.push(`/usuarios`)}>Cancelar</Button>
//         </HStack>
//         </Box>
//         </Container>
//     )
// }

// export default editar

import React from 'react'
import {getUsers} from '../../../data/user'
import InputForm from '../../../components/InputForm'
import SelectFormEstado from '../../../components/SelectFormEstado'
import SelectFormTipoUsuario from '../../../components/SelectFormTipoUsuario'

export const getServerSideProps = async  (context) => {
    const response = await getUsers(context.query.usuario)
  return {
    props: {
        usuario: response.data
    }
  }
}


const editar = (usuario) => {
    console.log(usuario)

    return(
        <div>{usuario.usuario.nombres}</div>
    )
}
export default editar