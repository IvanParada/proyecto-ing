import {useState } from "react";
import {useRouter} from 'next/router'
import axios from 'axios'
import {Select, Box, Button, Container, Input, Stack, Heading, FormControl, FormLabel,HStack } from '@chakra-ui/react'
import {updateUser} from '../../../data/user'
import Swal from 'sweetalert2'
export async function getServerSideProps(context){
    try{
        const response = await axios.get(`${process.env.API_URL}/userModels/search/${context.params.usuario}`)
        return {
            props: {
                data: response.data
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

const editar = ({data}) => {

  const [user, setUser] = useState(data)
    const router = useRouter()
    const {usuario} = router.query


    const handleChange = (e) => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
      console.log(e.target.name, e.target.value)
  }


  const onSubmit = async (e) => {
    e.preventDefault()
    const response = await updateUser(usuario,user)
    if(response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado',
        showConfirmButton: true,
        text: 'El usuario se actualizó correctamente',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/a6/b7/15/a6b715ecba7ebca3dae9adb2c2daf27e.gif")
          left top
          no-repeat
        `
      }).then(() => {
        router.push('/usuarios')
      })
    }else{
      Swal.fire({
        icon:'error',
        title: 'Error',
        showConfirmButton: true,
        text:'Ocurrió un error al actualizar el usuario',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/f2/3f/56/f23f564c8f91d735ba13e8cce53e980f.gif")
          left top
          no-repeat
        `
        
      })
    }

  }

    return(
        <Container  w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
        <Box bg='#DAEDEC' padding='100' margin='10' boxShadow='dark-lg'   rounded='lg' color='black' maxW='md'>
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}> Editar Usuario</Heading>
        <Stack>
            <FormControl  isRequired>
                <FormLabel>Nombres</FormLabel>
                <Input  variant='flushed'  placeholder='p. ej.: Ignacio Ignacio' type={"text"} onChange={handleChange} name={"nombres"} value={user.nombres}  />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Apellidos</FormLabel>
                <Input variant='flushed' placeholder='p. ej.: Perez Perez' type={"text"} onChange={handleChange}  name={"apellidos"} value={user.apellidos} />
            </FormControl >
            <FormControl isRequired>
                <FormLabel>RUT</FormLabel>
                <Input variant='flushed' placeholder='sin guión, ni puntos' type={"text"} onChange={handleChange}  name={"rut"} value={user.rut}/>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Estado</FormLabel>
            <Select variant='flushed' placeholder='Seleccione el estado del usuario' onChange={handleChange}  name={"estado"} value={user.estado}>
                <option>Autorizado</option>
                <option>Restringido</option>
            </Select>
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Tipo de Usuario</FormLabel>
            <Select variant='flushed' placeholder='Seleccione el tipo de usuario' onChange={handleChange}  name={"tipoUsuario"} value={user.tipoUsuario}>
                <option>Usuario</option>
                <option>Administrador</option>
            </Select>
            </FormControl>
        </Stack>
        <HStack>
        <Button  bgGradient='linear(to-l, #1A1A8F, #0000FF)' _hover={{
    bgGradient: 'linear(to-r, blue.500, blue.300)',
  }} color='white'   type="submit" my={6} onClick={onSubmit}> Guardar </Button>
        <Button bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
    bgGradient: 'linear(to-r, red.500, red.300)',
  }} color='white' onClick={() => router.push(`/usuario/ver/${user._id}`)}>Cancelar</Button>
        </HStack>
        </Box>
        </Container>
    )
}

export default editar

