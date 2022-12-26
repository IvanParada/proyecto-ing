import {useState} from 'react'
import {Select, Box, Button, Container, Input, Stack, Heading, FormControl, FormLabel, HStack } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import InputForm from '../../components/InputForm'
import SelectFormEstado from '../../components/SelectFormEstado'
import SelectFormTipoUsuario from '../../components/SelectFormTipoUsuario'


const CrearUsuarios = () => {

    const [user, createUser] = useState({

        nombres: '',
        apellidos: '',
        rut:'',
        estado:'',
        tipoUsuario:''
    })
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try{
            const response = await axios.post(`${process.env.API_URL}/userModel`, user)
            console.log(response)
            if(response.status == 201) {
                Swal.fire({
                    title: 'Usuario creado',
                    text: 'El usuario se ha creado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                router.push('/usuarios')
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        } catch (err) {
        Swal.fire({
            title: 'Error',
            text: 'Ha ocurrido un error',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        }
    }

    const handleChange = (e) => {
        createUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }
    return(
        <Container bg='#3C908B' maxW="xxl" centerContent>
        <Box bg='#DAEDEC' padding='100' margin='20' boxShadow='dark-lg'   rounded='lg' color='black' maxW='md'>
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Crear Usuarios</Heading>
        <Stack>
            <InputForm label="Nombres" handleChange={handleChange} variant="flushed" name="nombres" placeholder="p. ej.: Ignacio Ignacio" type="text"/>
            <InputForm label="Apellidos" handleChange={handleChange} variant="flushed" name="apellidos" placeholder="p. ej.: Perez Perez" type="text"/>
            <InputForm label="RUT" handleChange={handleChange} variant="flushed" name="rut" placeholder="Ingrese RUT, sin puntos ni guión" type="text"/>
        <SelectFormEstado label="Estado" handleChange={handleChange} variant="flushed" name="estado" placeholder="Seleccione..."/>
            <SelectFormTipoUsuario label="Rol Usuario" handleChange={handleChange} variant="flushed" name="tipoUsuario" placeholder="Seleccione..."/>
        </Stack>
        <HStack>
        <Button  bgGradient='linear(to-l, #1A1A8F, #0000FF)' _hover={{
    bgGradient: 'linear(to-r, blue.500, blue.300)',
  }} color='white'   type="submit" my={6} onClick={onSubmit}> Guardar </Button>
        <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
    bgGradient: 'linear(to-r, red.500, red.300)',
  }} color='white' onClick={() => router.push(`/usuarios`)}>Cancelar</Button>
        </HStack>
        </Box>
        </Container>
    )
}

export default CrearUsuarios
