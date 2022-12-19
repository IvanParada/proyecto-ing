import {useState} from 'react'
import {Select, Button, Container, Input, Stack, Heading, FormControl, FormLabel, option, HStack } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'


const CrearUsuarios = () => {

    const [values, setValues] = useState({

        nombres: '',
        apellidos: '',
        rut:'',
        estado:'',
        tipoUsuario:''
    })
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        try{
            const response = await axios.post(`${process.env.API_URL}/userModel`, values)
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

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }
    return(
        <Container maxW="container.md" centerContent>
            <Heading textAlign={"center"} my={10}> Crear Usuarios</Heading>
        <Stack>
            <FormControl isRequired>
                <FormLabel>Nombres</FormLabel>
                <Input variant='flushed' placeholder='p. ej.: Ignacio Ignacio' type={"text"} onChange={onChange} name={"nombres"}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input variant='flushed' placeholder='p. ej.: Perez Perez' type={"text"} onChange={onChange} name={"apellidos"}/>
            </FormControl >
            <FormControl isRequired>
                <FormLabel>RUT</FormLabel>
                <Input variant='flushed' placeholder='sin guión, ni puntos' type={"text"} onChange={onChange} name={"rut"}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Estado</FormLabel>
            <Select variant='flushed' placeholder='Seleccione el estado del usuario' onChange={onChange} name={"estado"}>
                <option>Autorizado</option>
                <option>Restringido</option>
            </Select>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Tipo de Usuario</FormLabel>
            <Select variant='flushed' placeholder='Seleccione el tipo de usuario' onChange={onChange} name={"tipoUsuario"}>
                <option>Usuario</option>
                <option>Administrador</option>
            </Select>
            </FormControl>
        </Stack>
        <HStack>
        <Button colorScheme="blue"  type="submit" my={6} onClick={onSubmit}> Guardar </Button>
        <Button colorScheme="red" onClick={() => router.push(`/usuarios`)}>Cancelar</Button>
        </HStack>
        </Container>
    )
}

export default CrearUsuarios


