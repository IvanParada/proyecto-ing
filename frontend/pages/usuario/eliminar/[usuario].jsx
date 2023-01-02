import { useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import {getUsers} from '../../../data/user'
import { Box,Container,Heading,Table,Tr,Td,Tbody, HStack, Button } from "@chakra-ui/react"
import Swal from 'sweetalert2'

export async function getServerSideProps(context) {
    try {
        const response = await getUsers(context.query.usuario)
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

const Eliminar = ({data}) => {
    const router = useRouter()
    const [user] = useState(data)


    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try{
            const response = await axios.delete(`${process.env.API_URL}/userModels/delete/${user._id}`, user)
            console.log(response)
            if(response.status == 200) {
                Swal.fire({
                    title: 'Usuario eliminado',
                    text: 'El usuario se ha eliminado exitosamente',
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


    return (
        <Container w='100%' h='100%' bgGradient='linear(#0A4C48 0%, #0B403D 25%, #09736C 50%)' maxW="100%" centerContent>
             <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='10' rounded='lg' color='black' >
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Eliminar Usuario</Heading>
            <Table variant="striped" colorScheme='purple'>
                <Tbody>
                <Tr>
                    <Td><b>ID</b></Td>
                    <Td>{user._id}</Td>
                </Tr>
                <Tr>
                    <Td><b>Nombres</b></Td>
                    <Td>{user.nombres}</Td>
                </Tr>
                <Tr>
                    <Td><b>Apellidos</b></Td>
                    <Td>{user.apellidos}</Td>
                </Tr>
                <Tr>
                    <Td><b>RUT</b></Td>
                    <Td> {user.rut}</Td>
                </Tr>
                <Tr>
                    <Td><b>Estado</b></Td>
                    <Td>{user.estado}</Td>
                </Tr>
                <Tr>
                    <Td><b>Rol</b></Td>
                    <Td>{user.tipoUsuario}</Td>
                </Tr>
                <Tr>
                    <Td><b>versionKey</b></Td>
                    <Td>{user.__v}</Td>
                </Tr>
                </Tbody>
            </Table>
      <HStack  py={10}>
        <Button w={"full"}  bgGradient='linear(to-l, #A00909, #FF0404)' _hover={{
    bgGradient: 'linear(to-r, red.500, red.300)',
  }} color='white' onClick={onSubmit}>Eliminar</Button>
        <Button w={"full"}  bgGradient='linear(to-l, #7928CA, #FF0080)' _hover={{
    bgGradient: 'linear(to-r, pink.500, purple.300)',
  }} color='white' onClick={() => router.push(`/usuario/ver/${user._id}`)}>Cancelar</Button>
      </HStack>
        </Box>
        </Container>
    )
}

export default Eliminar