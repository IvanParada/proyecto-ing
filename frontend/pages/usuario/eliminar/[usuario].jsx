import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import {getUsers,deleteUser} from '../../../data/user'
import { Box,Container,Heading,Table,Tr,Td,Tbody, HStack, Button } from "@chakra-ui/react"

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

const Usuario = ({data}) => {
    const router = useRouter()
    const [user] = useState(data)


    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await deleteUser(user)
        if(response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado',
            showConfirmButton: true,
            text: 'El usuario se eliminó correctamente'
          }).then(() => {
            router.push('/usuarios')
          })
        }else{
          Swal.fire({
            icon:'error',
            title: 'Error',
            showConfirmButton: true,
            text:'Ocurrió un error al eliminar el usuario'
          })
        }
    
      }


    return (
        <Container  bg='#3C908B'  maxW="10xl" centerContent>
             <Box  bg='#DAEDEC' boxShadow='dark-lg' padding='10' margin='40' rounded='lg' color='black' >
            <Heading bgGradient='linear(to-l, #181515, #383636, #181515)' bgClip='text' textAlign={"center"} my={10}>Eliminar Usuario</Heading>
            <Table variant="striped" colorScheme='purple'>
                <Tbody>
                <Tr>
                    <Td>ID</Td>
                    <Td>{user._id}</Td>
                </Tr>
                <Tr>
                    <Td>Nombres</Td>
                    <Td>{user.nombres}</Td>
                </Tr>
                <Tr>
                    <Td>Apellidos</Td>
                    <Td>{user.apellidos}</Td>
                </Tr>
                <Tr>
                    <Td>RUT</Td>
                    <Td> {user.rut}</Td>
                </Tr>
                <Tr>
                    <Td>Estado</Td>
                    <Td>{user.estado}</Td>
                </Tr>
                <Tr>
                    <Td>Rol</Td>
                    <Td>{user.tipoUsuario}</Td>
                </Tr>
                <Tr>
                    <Td>versionKey</Td>
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
  }} color='white' onClick={() => router.push(`/usuario/ver/${user._id}`)}>Volver</Button>
      </HStack>
        </Box>
        </Container>
)

}

export default Usuario